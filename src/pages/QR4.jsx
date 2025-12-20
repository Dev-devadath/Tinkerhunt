import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeProtectedPage from "../components/CodeProtectedPage";

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

function QR4() {
  const navigate = useNavigate();
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);

  useEffect(() => {
    // Check if previous page was visited
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    // if (!visitedPages.includes('QR3')) {
    //   // Redirect to no cheat page if QR3 wasn't visited
    //   navigate('/nocheat');
    //   return;
    // }
    
    // Track page visit
    const pageName = 'QR4';
    
    if (!visitedPages.includes(pageName)) {
      visitedPages.push(pageName);
      sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    }
    
    // Log all visited pages to console
    console.log('=== Visited Pages ===');
    console.log(visitedPages);
    console.log('=====================');
  }, [navigate]);

  return (
    <CodeProtectedPage requiredCode="t3nk">
      <>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100vh",
            paddingTop: "30vh",
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: "20px" }}>
            <TypingText
              text=""
              delay={100}
              onComplete={() => setShowSecondText(true)}
            />
          </div>
          {showSecondText && (
            <div style={{ fontSize: "20px", marginBottom: "15px" }}>
              <TypingText
                text="Okay einstein, lets try this one.."
                delay={50}
                onComplete={() => setShowThirdText(true)}
              />
            </div>
          )}
          {showThirdText && (
            <div style={{ fontSize: "18px", marginBottom: "15px" }}>
              <TypingText
                text="Watch your eyes"
                delay={50}
                onComplete={() => setShowButton(true)}
              />
            </div>
          )}
          {showButton && (
            <>
              <button
                onClick={() => setShowFullscreen(true)}
                style={{
                  padding: "15px 30px",
                  fontSize: "20px",
                }}
              >
                Next Clue
              </button>
              <img
                src="/assets/giphy (2).gif"
                alt="Homer Simpson"
                style={{
                  width: "200px",
                  margin: "20px auto",
                  display: "block",
                }}
              />
            </>
          )}
        </div>

        {showFullscreen && (
          <div
            onClick={() => setShowFullscreen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              cursor: "pointer",
            }}
          >
            <img
              src="/assets/image2.jpg"
              alt="Clue"
              style={{
                maxWidth: "95vw",
                maxHeight: "95vh",
                objectFit: "contain",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </>
    </CodeProtectedPage>
  );
}

export default QR4;
