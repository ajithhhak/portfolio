"use client";

import { useRef, useState } from 'react';

export default function ProjectDeck({ projects, onOpen }) {
  const track = useRef(null);
  const dragStart = useRef(null);
  const suppressClick = useRef(false);
  const [active, setActive] = useState(0);

  function move(direction) {
    const next = (active + direction + projects.length) % projects.length;
    track.current.scrollTo({ left: next * track.current.clientWidth });
  }

  return (
    <section className="deck" aria-label="Featured projects" aria-roledescription="carousel">
      <div className="deck-stack">
        <div className="deck-track" ref={track}
          onScroll={({ currentTarget }) => {
            const index = Math.round(currentTarget.scrollLeft / currentTarget.clientWidth);
            setActive(Math.max(0, Math.min(projects.length - 1, index)));
          }}
          onPointerDown={event => {
            suppressClick.current = false;
            if (event.pointerType !== 'mouse' || event.button !== 0) return;
            event.target.closest('button')?.setPointerCapture(event.pointerId);
            dragStart.current = event.clientX;
          }}
          onPointerCancel={() => { dragStart.current = null; }}
          onPointerUp={event => {
            if (dragStart.current === null) return;
            const distance = event.clientX - dragStart.current;
            dragStart.current = null;
            if (Math.abs(distance) < 36) return;
            suppressClick.current = true;
            move(distance < 0 ? 1 : -1);
          }}
          onClickCapture={event => {
            if (suppressClick.current && event.detail > 0) event.stopPropagation();
            suppressClick.current = false;
          }}
          onDragStart={event => event.preventDefault()}>
          {projects.map(project => {
            const isBoard = project.id === 'hw5';
            return (
              <button key={project.id} className="feature" aria-haspopup="dialog"
                aria-label={`Open ${project.title}`} onClick={() => onOpen(project)}>
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
      </div>
      <div className="deck-controls">
        <span aria-live="polite">Featured project {active + 1} of {projects.length}</span>
        <button onClick={() => move(-1)} aria-label="Previous project">‹</button>
        <button onClick={() => move(1)} aria-label="Next project">›</button>
      </div>
    </section>
  );
}
