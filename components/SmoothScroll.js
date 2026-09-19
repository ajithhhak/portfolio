"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis for momentum smooth scrolling
    const lenis = new Lenis({
      duration: 1.5, // Ultra-smooth glide duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential deceleration curve
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
        duration: 1.8, // 1.8s silky smooth anchor jump
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      window.history.pushState(null, '', targetId);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
