"use client";
import { useState, useCallback } from 'react';

export default function ImageCarousel({ images, alt, variant = 'card' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((index, e) => {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    setCurrentIndex(index);
  }, []);

  const goPrev = useCallback((e) => {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goNext = useCallback((e) => {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  if (!images || images.length === 0) return null;

  const isModal = variant === 'modal';
  const height = isModal ? '280px' : '160px';

  return (
    <div
      className={`carousel ${isModal ? 'carousel-modal' : 'carousel-card'}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image Track */}
      <div className="carousel-viewport" style={{ height }}>
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="carousel-slide"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={src}
                alt={`${alt} - ${i + 1}`}
                style={{
                  width: '100%',
                  height,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goPrev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="carousel-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={(e) => goTo(i, e)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
