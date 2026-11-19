"use client";

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home', icon: 'M3 10.5 12 3l9 7.5V21h-6v-7H9v7H3z' },
  { id: 'projects', label: 'Projects', icon: 'M3 6h7l2 3h9v11H3z' },
  { id: 'education-skills', label: 'Skills', icon: 'm2 9 10-5 10 5-10 5z M6 12v5q6 5 12 0v-5' },
  { id: 'work-process', label: 'Process', icon: 'M8 5h13M8 12h10M8 19h7M3 5h.1M3 12h.1M3 19h.1' },
  { id: 'contact', label: 'Contact', icon: 'M3 5h18v14H3z M3 6l9 7 9-7' }
];

export default function Navigation() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 680px)');
    const targets = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    let frame = 0;
    function update() {
      frame = 0;
      if (!mobile.matches || !targets.length) return;
      const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const marker = Math.min(150, window.innerHeight * .25);
      const visible = targets.filter(el => el.getBoundingClientRect().top <= marker);
      setActive((atEnd ? targets.at(-1) : visible.at(-1) || targets[0]).id);
    }
    function schedule() {
      if (!frame && mobile.matches) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <>
      <header className="top">
        <nav className="shell nav" aria-label="Main navigation">
          <a className="brand" href="/#hero">Ajith Kumar</a>
          <div className="nav-links">
            <a href="/#projects">Projects</a><a href="/#education-skills">Background</a>
            <a href="/#work-process">Process</a>
          </div>
          <a className="contact-btn" href="/#contact">Contact</a>
          <a className="mobile-resume" href="/resume.pdf" download>Résumé</a>
        </nav>
      </header>
      <nav className="mobile-tabs" aria-label="Portfolio sections">
        {sections.map(({ id, label, icon }) => (
          <a key={id} href={`/#${id}`} aria-current={active === id ? 'location' : undefined}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={icon} /></svg>
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
