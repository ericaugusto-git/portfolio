"use client"

import React, { useEffect, useRef } from 'react';
import { p5i } from 'p5i';
import type { P5I } from 'p5i';

const Sketch: React.FC = () => {
  const el = useRef<HTMLDivElement | null>(null);

  const {
    mount,
    unmount,
    createCanvas,
    background,
    noFill,
    stroke,
    noise,
    noiseSeed,
    resizeCanvas,
    cos,
    sin,
    TWO_PI,
  } = p5i();

  let w = window.innerWidth;
  let h = window.innerHeight;
  let offsetY = window.scrollY;

  const SCALE = 200;
  const LENGTH = 10;
  const SPACING = 15;

  const getForceOnPoint = (x: number, y: number, z: number) => {
    return (noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * TWO_PI;
  };

  const existingPoints = new Set<string>();
  const points: { x: number, y: number, opacity: number }[] = [];

  const addPoints = () => {
    for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
      for (let y = -SPACING / 2; y < h + offsetY + SPACING; y += SPACING) {
        const id = `${x}-${y}`;
        if (existingPoints.has(id)) continue;
        existingPoints.add(id);
        points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 });
      }
    }
  };

  const setup = () => {
    createCanvas(w, h);
    noFill();

    noiseSeed(+new Date());

    addPoints();
  };

  const draw = ({ circle }: P5I) => {
    background('#000000');
    const t = +new Date() / 10000;

    for (const p of points) {
      const { x, y } = p;
      const rad = getForceOnPoint(x, y, t);
      const length = (noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH;
      const nx = x + cos(rad) * length;
      const ny = y + sin(rad) * length;
      stroke(40, 40, 40, (Math.abs(cos(rad)) * 0.8 + 0.2) * p.opacity * 255);
      circle(nx, ny - offsetY, 1);
    }
  };

  const restart = () => {
    if (el.current) mount(el.current, { setup, draw });
  };

  useEffect(() => {
    restart();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      resizeCanvas(w, h);
      addPoints();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      unmount();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={el} style={{ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, pointerEvents: 'none', zIndex: -5 }} />;
};

export default Sketch;
