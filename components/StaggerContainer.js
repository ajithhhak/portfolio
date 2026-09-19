"use client";
import { useEffect, useRef, useState } from 'react';

export default function StaggerContainer({
  children,
  className = '',
  stagger = 0.08,
  animation = 'fade-up',
  threshold = 0.1,
  once = true,
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`stagger-container ${visible ? 'stagger-visible' : ''} ${className}`.trim()}
      style={{
        '--stagger-step': `${stagger}s`,
        '--stagger-animation': animation,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
