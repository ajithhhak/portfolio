"use client";

import { useRef, useState } from 'react';

export default function ProjectDeck({ projects, onOpen }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [offset, setOffset] = useState(0);
  const gesture = useRef(null);
  const suppressClick = useRef(false);
  const count = projects.length;
  const next = (active + direction + count) % count;

  function move(step) {
    if (direction || count < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive((active + step + count) % count);
      setOffset(0);
      return;
    }
    setDirection(step);
  }

  function beginDrag(event) {
    if (direction || !event.isPrimary || event.button !== 0) return;
    suppressClick.current = false;
    gesture.current = { id: event.pointerId, x: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function endDrag(event) {
    if (gesture.current?.id !== event.pointerId) return;
    const distance = event.clientX - gesture.current.x;
    gesture.current = null;
    suppressClick.current = Math.abs(distance) > 8;
    if (Math.abs(distance) >= 40) move(distance < 0 ? 1 : -1);
    else setOffset(0);
  }

  return (
    <section className="deck" aria-label="Featured projects" aria-roledescription="carousel">
      <div className="deck-stack">
        {projects.map((project, index) => {
          const front = index === active;
          const depth = (index - next + count) % count;
          const isBoard = project.id === 'hw5';
          return (
            <button key={project.id} className="feature deck-card"
              data-departing={front && direction ? 'true' : undefined}
              data-dragging={front && offset && !direction ? 'true' : undefined}
              aria-haspopup="dialog" disabled={!front} aria-hidden={!front}
              aria-label={`Open ${project.title}`}
              style={{
                zIndex: front ? count + 1 : count - depth,
                '--depth': Math.min(depth, 2),
                '--drag': `${front ? offset : 0}px`,
                '--tilt': `${front ? offset / 16 : 0}deg`,
                '--side': -direction
              }}
              onPointerDown={beginDrag}
              onPointerMove={event => {
                if (gesture.current?.id === event.pointerId) {
                  setOffset(Math.max(-120, Math.min(120, event.clientX - gesture.current.x)));
                }
              }}
              onPointerUp={endDrag}
              onPointerCancel={() => { gesture.current = null; setOffset(0); }}
              onDragStart={event => event.preventDefault()}
              onAnimationEnd={event => {
                if (event.target !== event.currentTarget || !front || !direction) return;
                setActive(next);
                setDirection(0);
                setOffset(0);
              }}
              onClick={event => {
                if (!direction && (!event.detail || !suppressClick.current)) onOpen(project);
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
