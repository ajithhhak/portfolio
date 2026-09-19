"use client";

export default function AnimatedText({
  text,
  className = '',
  charClassName = 'char-reveal',
  baseDelay = 0,
  step = 0.04,
  as: Tag = 'span',
  style,
}) {
  return (
    <Tag className={className} aria-label={text} style={style}>
      {text.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={charClassName}
          style={{ animationDelay: `${baseDelay + i * step}s` }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}
