import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 - 75 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 - 25 : 0,
  });
  const velocityRef = useRef({
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  });
  const animationFrameRef = useRef();

  useEffect(() => {
    // Initialize position on mount
    if (typeof window !== "undefined") {
      setPosition({
        x: window.innerWidth / 2 - 75,
        y: window.innerHeight / 2 - 25,
      });
    }

    const animate = () => {
      if (typeof window === "undefined") return;

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
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            margin: 0,
            marginBottom: "20px",
            fontFamily: "Courier New",
            color: "#000",
          }}
        >
          Welcome to Treasure Hunt!!
        </h1>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // Add your rules/faq navigation or modal here
          }}
          style={{
            fontSize: "14px",
            color: "#0066cc",
            textDecoration: "none",
            pointerEvents: "auto",
            cursor: "pointer",
            fontFamily: "Courier New",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          rules/faq
        </a>
      </div>
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
          zIndex: 2,
        }}
      >
        start :)
      </button>
    </div>
  );
}

export default Start;
