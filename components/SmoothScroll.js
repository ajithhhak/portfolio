"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionPreference.matches) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const syncModalScroll = () => {
      const modalOpen = document.querySelector('.project-modal-overlay.open');
      if (modalOpen) {
        lenis.stop();
        document.body.style.overflow = 'hidden';
      } else {
        lenis.start();
        document.body.style.overflow = '';
      }
    };

    const observer = new MutationObserver(syncModalScroll);
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class'],
    });

    const handleAnchorClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor || anchor.target === '_blank') return;

      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      let targetElement;
      try {
        targetElement = document.querySelector(targetId);
      } catch {
        return;
      }
      if (!targetElement) return;

      event.preventDefault();
      lenis.scrollTo(targetElement, { offset: -85, duration: 1.2 });
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
