import { useEffect, useState, useRef } from "react";

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ballPosition = useRef({ x: 0, y: 0 }); // Using ref for ball position
  const speed = 0.1;

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animate ball position
    const animateBall = () => {
      const distX = position.x - ballPosition.current.x;
      const distY = position.y - ballPosition.current.y;

      ballPosition.current = {
        x: ballPosition.current.x + distX * speed,
        y: ballPosition.current.y + distY * speed,
      };

      requestAnimationFrame(animateBall);
    };

    animateBall();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]); // Only depend on mouse position

  return (
    <div
      className="fixed bg-white w-10 h-10 rounded-full pointer-events-none mix-blend-difference"
      style={{
        left: `${ballPosition.current.x}px`,
        top: `${ballPosition.current.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};
