import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 75,
    y: window.innerHeight / 2 - 25,
  });
  const velocityRef = useRef({
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  });
  const animationFrameRef = useRef();

  useEffect(() => {
    const animate = () => {
      setPosition((prevPos) => {
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 50;

        let newX = prevPos.x + velocityRef.current.vx;
        let newY = prevPos.y + velocityRef.current.vy;

        // Bounce off edges
        if (newX <= 0 || newX >= maxX) {
          velocityRef.current.vx *= -1;
          newX = Math.max(0, Math.min(newX, maxX));
        }
        if (newY <= 0 || newY >= maxY) {
          velocityRef.current.vy *= -1;
          newY = Math.max(0, Math.min(newY, maxY));
        }

        // Occasionally change direction slightly for more organic movement
        if (Math.random() < 0.01) {
          velocityRef.current.vx += (Math.random() - 0.5) * 0.5;
          velocityRef.current.vy += (Math.random() - 0.5) * 0.5;

          // Limit max speed
          const maxSpeed = 2;
          const speed = Math.sqrt(
            velocityRef.current.vx ** 2 + velocityRef.current.vy ** 2
          );
          if (speed > maxSpeed) {
            velocityRef.current.vx =
              (velocityRef.current.vx / speed) * maxSpeed;
            velocityRef.current.vy =
              (velocityRef.current.vy / speed) * maxSpeed;
          }
        }

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => navigate("/t1nk")}
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          fontFamily: "Courier New",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#000",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
          padding: "10px 20px",
          transition: "left 0.1s linear, top 0.1s linear",
        }}
      >
        start :)
      </button>
    </div>
  );
}

export default Start;
