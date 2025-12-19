import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  const numButtons = 7;
  const realButtonIndex = useRef(Math.floor(Math.random() * numButtons));

  // Initialize buttons with random positions and velocities
  const initializeButtons = () => {
    const buttons = [];
    for (let i = 0; i < numButtons; i++) {
      buttons.push({
        id: i,
        x: Math.random() * (window.innerWidth - 150),
        y: Math.random() * (window.innerHeight - 50),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }
    return buttons;
  };

  const [buttons, setButtons] = useState(initializeButtons);
  const animationFrameRef = useRef();

  useEffect(() => {
    const animate = () => {
      setButtons((prevButtons) => {
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 50;

        return prevButtons.map((button) => {
          let newX = button.x + button.vx;
          let newY = button.y + button.vy;
          let newVx = button.vx;
          let newVy = button.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= maxX) {
            newVx *= -1;
            newX = Math.max(0, Math.min(newX, maxX));
          }
          if (newY <= 0 || newY >= maxY) {
            newVy *= -1;
            newY = Math.max(0, Math.min(newY, maxY));
          }

          // Occasionally change direction slightly for more organic movement
          if (Math.random() < 0.01) {
            newVx += (Math.random() - 0.5) * 0.5;
            newVy += (Math.random() - 0.5) * 0.5;

            // Limit max speed
            const maxSpeed = 2;
            const speed = Math.sqrt(newVx ** 2 + newVy ** 2);
            if (speed > maxSpeed) {
              newVx = (newVx / speed) * maxSpeed;
              newVy = (newVy / speed) * maxSpeed;
            }
          }

          return {
            ...button,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });
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

  const handleClick = (buttonId) => {
    if (buttonId === realButtonIndex.current) {
      navigate("/t1nk");
    }
  };

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
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleClick(button.id)}
          style={{
            position: "absolute",
            left: `${button.x}px`,
            top: `${button.y}px`,
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
      ))}
    </div>
  );
}

export default Start;
