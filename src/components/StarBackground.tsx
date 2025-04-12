"use client";

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Create initial stars
    const createStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setStars(newStars);
    };

    // Animate stars
    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          y: star.y + star.speed > 100 ? 0 : star.y + star.speed,
          opacity: Math.sin(Date.now() * star.speed * 0.001) * 0.5 + 0.5,
        }))
      );
    };

    createStars();
    const interval = setInterval(animateStars, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `translateZ(0)`,
            transition: 'opacity 0.2s ease-in-out',
          }}
        />
      ))}
    </div>
  );
} 