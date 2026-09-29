"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis for momentum smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Pause Lenis when any modal opens, resume when it closes
    const observer = new MutationObserver(() => {
      const modalOpen = document.querySelector('.project-modal-overlay.open');
      if (modalOpen) {
        lenis.stop();
        document.body.style.overflow = 'hidden';
      } else {
        lenis.start();
        document.body.style.overflow = '';
      }
    });

    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });

    // Intercept in-page anchor links and route them through Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();
      lenis.scrollTo(targetElement, {
        offset: -85,
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      window.history.pushState(null, '', targetId);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
      lenis.destroy();
      document.body.style.overflow = '';
      delete window.__lenis;
    };
  }, []);

  return null;
}
