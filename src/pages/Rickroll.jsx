import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CodeProtectedPage from "../components/CodeProtectedPage";

function Rickroll() {
  const [stage, setStage] = useState(1); // 1: loading text, 2: fade out, 3: loading again, 4: show content
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // After 4 seconds, start fade out
    const timer1 = setTimeout(() => {
      setFadeOut(true);
      setStage(2);
    }, 4000);

    // After fade out (4.5 seconds), show loading again
    const timer2 = setTimeout(() => {
      setStage(3);
      setFadeOut(false);
    }, 4500);

    // After 5 more seconds (total 9.5 seconds), show the gif
    const timer3 = setTimeout(() => {
      setStage(4);
    }, 9500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <CodeProtectedPage>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "20px",
        }}
      >
        {stage < 4 ? (
          <div
            style={{
              fontSize: "24px",
              opacity: fadeOut ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            loading...
          </div>
        ) : (
          <>
            <img
              src="/rickroll-roll.gif"
              alt="Rickroll"
              style={{ maxWidth: "80%", maxHeight: "70vh" }}
            />
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>pattiche</div>
            <div
              style={{
                fontSize: "18px",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              this qr was a decoy try fond the orginal one{" "}
              <Link
                to="/start"
                style={{ color: "#0066cc", textDecoration: "none" }}
              >
                here
              </Link>
            </div>
          </>
        )}
      </div>
    </CodeProtectedPage>
  );
}

export default Rickroll;
