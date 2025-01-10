import React, { useEffect, useRef } from 'react';

const colors = ['#14b8a6','#ec4899'];

const CursorMultiFollow: React.FC = () => {
  const cursorRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      const radius = 20; // Reduced radius to make circles closer to the mouse
      const angleStep = (2 * Math.PI) / cursorRefs.current.length;

      cursorRefs.current.forEach((cursor, index) => {
        if (cursor) {
          const angle = index * angleStep;
          const offsetX = radius * Math.cos(angle);
          const offsetY = radius * Math.sin(angle);
          const delay = index * 0.05;
          cursor.style.transition = `transform ${0.2 + delay}s ease-out`;
          cursor.style.transform = `translate3d(${x + offsetX - 10}px, ${y + offsetY - 10}px, 0)`;
        }
      });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;

      cursorRefs.current.forEach((cursor, index) => {
        if (cursor) {
          const delay = index * 0.05;
          cursor.style.transition = `transform ${0.2 + delay}s ease-out`;
          cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cursorRefs.current[index] = el;
          }}
          className="cursor-follow"
          style={{
            backgroundColor: colors[index],
            transform: `translate3d(${index * 30}px, ${index * 30}px, 0)`,
          }}
        />
      ))}
      <style jsx>{`
        .cursor-follow {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default CursorMultiFollow;