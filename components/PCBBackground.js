"use client";
import { useEffect, useRef } from 'react';

export default function PCBBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let tracks = [];
    let electrons = [];
    
    const generatePCB = () => {
      tracks = [];
      electrons = [];
      const numTracks = Math.floor((width * height) / 20000); // denser track count
      const gridSize = 20;
      const snap = (v) => Math.round(v / gridSize) * gridSize;

      const occupied = new Set();
      const markOccupied = (px, py) => occupied.add(`${Math.round(px)},${Math.round(py)}`);
      const isOccupied = (px, py) => occupied.has(`${Math.round(px)},${Math.round(py)}`);

      // Helper to check if a line segment is clear, and mark it if it is
      const checkAndMarkLine = (x1, y1, x2, y2) => {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const steps = Math.max(Math.abs(dx), Math.abs(dy)) / gridSize;
        const pts = [];
        // Check halfway points and grid points to ensure no crossing lines
        for (let i = 1; i <= steps * 2; i++) {
          const px = Math.round(x1 + (dx / (steps * 2)) * i);
          const py = Math.round(y1 + (dy / (steps * 2)) * i);
          if (isOccupied(px, py)) return false; // Collision detected
          pts.push({x: px, y: py});
        }
        // If clear, mark all points as occupied
        pts.forEach(p => markOccupied(p.x, p.y));
        return true;
      };

      // Attempt to place tracks. We do more attempts since some will be blocked.
      for (let i = 0; i < numTracks * 8; i++) {
        if (tracks.length >= numTracks) break;

        let x = snap(Math.random() * width);
        let y = snap(Math.random() * height);
        
        if (isOccupied(x, y)) continue;

        let points = [{x, y}];
        let currentLength = 0;

        // Random initial direction
        let dirX = Math.random() > 0.5 ? 1 : (Math.random() > 0.5 ? -1 : 0);
        let dirY = dirX === 0 ? (Math.random() > 0.5 ? 1 : -1) : 0;

        const segmentsCount = 3 + Math.floor(Math.random() * 5);
        markOccupied(x, y);

        for (let j = 0; j < segmentsCount; j++) {
          // Draw straight segment
          let dist = snap(40 + Math.random() * 100);
          let nx = x + dirX * dist;
          let ny = y + dirY * dist;
          
          if (nx < 0 || nx > width || ny < 0 || ny > height || !checkAndMarkLine(x, y, nx, ny)) break;
          
          points.push({x: nx, y: ny});
          currentLength += dist;
          x = nx;
          y = ny;

          // Add a 45-degree turn segment
          let diagDist = snap(20 + Math.random() * 40);
          let nextDirX = dirX === 0 ? (Math.random() > 0.5 ? 1 : -1) : dirX;
          let nextDirY = dirY === 0 ? (Math.random() > 0.5 ? 1 : -1) : dirY;
          
          nx = x + nextDirX * diagDist;
          ny = y + nextDirY * diagDist;

          if (nx < 0 || nx > width || ny < 0 || ny > height || !checkAndMarkLine(x, y, nx, ny)) break;
          
          points.push({x: nx, y: ny});
          currentLength += Math.sqrt(diagDist*diagDist * 2);
          x = nx;
          y = ny;

          // Change to the other orthogonal direction
          if (dirX !== 0) {
            dirX = 0;
            dirY = nextDirY;
          } else {
            dirY = 0;
            dirX = nextDirX;
          }
        }
        
        if (points.length > 1) { // Only keep if it has at least one valid segment
          tracks.push({ points, length: currentLength });
        }
      }

      // Generate electrons that ride the tracks
      for (let i = 0; i < numTracks * 1.5; i++) {
        const trackIdx = Math.floor(Math.random() * tracks.length);
        electrons.push({
          track: trackIdx,
          segment: 0,
          progress: Math.random(), // 0 to 1 along the current segment
          speed: 1.5 + Math.random() * 2, // pixels per frame
          dir: Math.random() > 0.5 ? 1 : -1
        });
      }
    };

    generatePCB();

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      generatePCB(); // regenerate on resize to fill screen
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      
      // Draw Tracks
      tracks.forEach(track => {
        const pts = track.points;
        
        // Check distance to mouse from any point on the track
        let minDist = Infinity;
        for (let i = 0; i < pts.length; i++) {
          const dx = pts[i].x - mouse.x;
          const dy = pts[i].y - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < minDist) minDist = dist;
        }

        let opacity = 0.08;
        if (minDist < 180) {
          opacity += 0.3 * (1 - minDist / 180);
        }

        // Golden copper color for traces
        ctx.strokeStyle = `rgba(212, 175, 55, ${opacity + 0.1})`;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.stroke();

        // Draw vias (pads) at the start and end of tracks as rings
        ctx.strokeStyle = `rgba(212, 175, 55, ${opacity + 0.3})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pts[0].x, pts[0].y, 3.5, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(pts[pts.length - 1].x, pts[pts.length - 1].y, 3.5, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Draw and move electrons
      electrons.forEach(el => {
        const track = tracks[el.track];
        const pts = track.points;
        
        if (el.dir === 1) {
          if (el.segment >= pts.length - 1) {
            el.segment = 0;
            el.progress = 0;
          }
        } else {
          if (el.segment < 0) {
            el.segment = pts.length - 2;
            el.progress = 1;
          }
        }

        const p1 = el.dir === 1 ? pts[el.segment] : pts[el.segment + 1];
        const p2 = el.dir === 1 ? pts[el.segment + 1] : pts[el.segment];
        
        if (!p1 || !p2) {
          el.segment = 0; el.progress = 0; el.dir = 1;
          return;
        }

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        // Move progress
        el.progress += el.speed / dist;
        
        if (el.progress >= 1) {
          el.progress = 0;
          el.segment += el.dir;
        }

        const ex = p1.x + dx * el.progress;
        const ey = p1.y + dy * el.progress;

        // Calculate distance to mouse for glow
        const mdx = ex - mouse.x;
        const mdy = ey - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        let glow = 0;
        if (mDist < 150) {
          glow = 1 - mDist / 150;
        }

        // Golden glow for electrons
        ctx.beginPath();
        ctx.arc(ex, ey, 2.5 + glow * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = glow > 0 ? `rgba(255, 215, 0, ${0.6 + glow * 0.4})` : 'rgba(212, 175, 55, 0.5)';
        ctx.fill();
        
        if (glow > 0) {
          ctx.beginPath();
          ctx.arc(ex, ey, 8 + glow * 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 215, 0, ${glow * 0.3})`;
          ctx.fill();
        }
      });

      // Draw mouse radial glow
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.05)'); // golden radial glow
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="pcb-canvas" ref={canvasRef} />;
}
