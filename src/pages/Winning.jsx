import React, { useState, useEffect } from "react";

function TypingText({ text, delay = 50, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete && currentIndex === text.length) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return <span>{displayedText}</span>;
}

function Winning() {
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showFourthText, setShowFourthText] = useState(false);
  const [showFifthText, setShowFifthText] = useState(false);
  const [showSixthText, setShowSixthText] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        paddingTop: "30vh",
        position: "relative",
      }}
    >
      <div style={{ fontSize: "24px", marginBottom: "20px" }}>
        <TypingText
          text="Congratulations!"
          delay={100}
          onComplete={() => setShowSecondText(true)}
        />
      </div>
      {showSecondText && (
        <div style={{ fontSize: "20px", marginBottom: "15px" }}>
          <TypingText
            text="You made it to the end!"
            delay={50}
            onComplete={() => setShowThirdText(true)}
          />
        </div>
      )}
      {showThirdText && (
        <div style={{ fontSize: "18px", marginBottom: "15px" }}>
          <TypingText
            text="I'm not happy for you"
            delay={50}
            onComplete={() => {
              setTimeout(() => {
                setShowFourthText(true);
              }, 1000);
            }}
          />
        </div>
      )}
      {showFourthText && (
        <div style={{ fontSize: "18px", marginBottom: "15px" }}>
          <TypingText
            text="It was just for fun, we don't have any gifts.. :("
            delay={50}
            onComplete={() => {
              setTimeout(() => {
                setShowFifthText(true);
              }, 1500);
            }}
          />
        </div>
      )}
      {showFifthText && (
        <div style={{ fontSize: "18px", marginBottom: "15px" }}>
          <TypingText
            text="Just kidding! Find and connect with these people to get your super duper kunji gifts.. :D"
            delay={50}
            onComplete={() => {
              setTimeout(() => {
                setShowSixthText(true);
              }, 1000);
            }}
          />
        </div>
      )}
      {showSixthText && (
        <div style={{ fontSize: "18px", marginBottom: "15px" }}>
          <span>
            <a
              href="https://tinkerhub.org/@affanbuilds"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066cc", textDecoration: "none" }}
            >
              Affan
            </a>
            {" or "}
            <a
              href="https://tinkerhub.org/@jake"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066cc", textDecoration: "none" }}
            >
              paulin
            </a>
          </span>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "14px",
          color: "#666",
        }}
      >
        Prizes will only be for the first 10 winners
      </div>
    </div>
  );
}

export default Winning;
