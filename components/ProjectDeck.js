"use client";

import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function ProjectDeck({ projects, onOpen }) {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
  const stack = useRef(null);
  const gesture = useRef(null);
  const turning = useRef(false);
  const suppressClick = useRef(false);
  const count = projects.length;

  async function move(step) {
    if (turning.current || count < 2) return;
    const card = stack.current.children[active];
    const next = (active + step + count) % count;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const commit = () => { setActive(next); setOffset(0); };
    if (reducedMotion) { commit(); return; }

    turning.current = true;
    // Lift the card from its current grip, change its stacking order at the
    // outer edge, then return it beneath the newly exposed project.
    const side = -step;
    const reach = Math.max(card.offsetWidth * .24, Math.abs(offset) + 12);
    const lifted = `translate(${side * reach}px, -8px) rotate(${side * 9}deg)`;
    const start = getComputedStyle(card).transform;
    let flight = card.animate([{ transform: start }, { transform: lifted }], {
      duration: offset ? 155 : 215, easing: 'cubic-bezier(.2,.72,.35,1)', fill: 'forwards'
    });
    try {
      await flight.finished;
      if (!card.isConnected) return;
      flushSync(commit);
      flight.cancel();
      flight = card.animate([{ transform: lifted }, {}], {
        duration: 285, easing: 'cubic-bezier(.17,.85,.25,1)'
      });
      await flight.finished;
    } catch (error) {
      if (error.name !== 'AbortError') throw error;
    } finally {
      flight.cancel();
      turning.current = false;
    }
  }

  function beginDrag(event) {
    if (turning.current || !event.isPrimary || event.button !== 0) return;
    suppressClick.current = false;
    gesture.current = { id: event.pointerId, x: event.clientX, time: event.timeStamp };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function endDrag(event) {
    const drag = gesture.current;
    if (drag?.id !== event.pointerId) return;
    gesture.current = null;
    const delta = event.clientX - drag.x;
    const distance = Math.abs(delta);
    const speed = distance / Math.max(1, event.timeStamp - drag.time);
    suppressClick.current = distance > 7;
    if (distance > event.currentTarget.offsetWidth * .18 || (distance > 22 && speed > .45)) {
      move(delta < 0 ? 1 : -1);
    } else {
      setOffset(0);
    }
  }
  return (
    <section className="deck" aria-label="Featured projects" aria-roledescription="carousel">
      <div className="deck-stack" ref={stack}>
        {projects.map((project, index) => {
          const front = index === active;
          const depth = (index - active + count) % count;
          const reveal = (active + (offset > 0 ? -1 : 1) + count) % count;
          const progress = Math.min(1, Math.abs(offset) / 100);
          const peeking = !front && index === reveal && progress > 0;
          const layer = Math.min(depth, 2) * (peeking ? 1 - progress : 1);
          const isBoard = project.id === 'hw5';
          return (
            <button key={project.id} className="feature deck-card"
              data-dragging={(front || peeking) && offset ? 'true' : undefined}
              aria-haspopup="dialog" disabled={!front} aria-hidden={!front}
              aria-label={`Open ${project.title}`}
              style={{
                zIndex: front ? count + 1 : peeking ? count : count - depth,
                '--depth': layer,
                '--drag': `${front ? offset : 0}px`,
                '--tilt': `${front ? Math.max(-8, Math.min(8, offset / 19)) : 0}deg`
              }}
              onPointerDown={beginDrag}
              onPointerMove={event => {
                if (gesture.current?.id === event.pointerId) {
                  const delta = event.clientX - gesture.current.x;
                  const width = event.currentTarget.offsetWidth;
                  setOffset(delta / (1 + Math.abs(delta) / (width * .7)));
                }
              }}
              onPointerUp={endDrag}
              onPointerCancel={() => { gesture.current = null; setOffset(0); }}
              onDragStart={event => event.preventDefault()}
              onClick={event => {
                if (!turning.current && (!event.detail || !suppressClick.current)) onOpen(project);
                suppressClick.current = false;
              }}>
                {isBoard ? (
                  <div className="drawing">
                    <span className="drawing-label">PCB / Top view</span>
                    <img src="/pcb/relay-board.webp" width="877" height="297" alt="" />
                    <span className="drawing-note">ESP32 · 4-layer board</span>
                  </div>
                ) : <img className="deck-photo" src={project.thumbnail} alt="" />}
                <div className="caption">
                  <div><span className="eyebrow">{project.category}</span>
                    <h2>{isBoard ? 'Four-channel relay PCB' : project.title}</h2></div>
                  <span className="plus" aria-hidden="true">+</span>
                </div>
            </button>
          );
        })}
      </div>
      <div className="deck-controls">
        <span aria-live="polite">Featured project {active + 1} of {projects.length}</span>
        <button onClick={() => move(-1)} aria-label="Previous project">‹</button>
        <button onClick={() => move(1)} aria-label="Next project">›</button>
      </div>
    </section>
  );
}
