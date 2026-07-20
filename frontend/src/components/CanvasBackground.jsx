import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    // Each blob: { x, y, vx, vy, r, color }
    let blobs = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      createBlobs();
    };

    const createBlobs = () => {
      const W = canvas.width, H = canvas.height;
      const base = Math.min(W, H);
      blobs = [
        { x: W * 0.2, y: H * 0.3, vx: 0.18, vy: 0.12, r: base * 0.38, color: 'rgba(59,130,246,0.16)' },
        { x: W * 0.8, y: H * 0.6, vx: -0.14, vy: 0.18, r: base * 0.32, color: 'rgba(139,92,246,0.14)' },
        { x: W * 0.5, y: H * 0.8, vx: 0.10, vy: -0.16, r: base * 0.28, color: 'rgba(6,182,212,0.12)' },
        { x: W * 0.1, y: H * 0.7, vx: 0.22, vy: -0.10, r: base * 0.22, color: 'rgba(59,130,246,0.10)' }
      ];
    };

    const drawBlob = (b) => {
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, b.color);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    };

    const tick = () => {
      const W = canvas.width, H = canvas.height;
      ctx.fillStyle = 'rgba(10,10,10,0.06)';
      ctx.fillRect(0, 0, W, H);
      blobs.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x - b.r > W)  b.x = -b.r;
        if (b.x + b.r < 0)  b.x = W + b.r;
        if (b.y - b.r > H)  b.y = -b.r;
        if (b.y + b.r < 0)  b.y = H + b.r;
        drawBlob(b);
      });
      animId = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        width: '100%', height: '100%',
        zIndex: -1, pointerEvents: 'none',
        background: '#0A0A0A',
        filter: 'blur(65px)',
        transform: 'scale(1.08)'
      }}
    />
  );
};

export default CanvasBackground;
