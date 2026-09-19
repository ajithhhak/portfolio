"use client";
import { useEffect, useRef, useState } from 'react';

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.7,
  threshold = 0.12,
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
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`aos aos-${animation} ${visible ? 'aos-visible' : ''} ${className}`.trim()}
      style={{
        '--aos-delay': `${delay}s`,
        '--aos-duration': `${duration}s`,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
