import React, { useState, useEffect } from "react";

function QR1() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [showAudio, setShowAudio] = useState(false);

  const fullText1 = "okay,";
  const fullText2 = "Here is your first clue:";
  const fullText3 = "good luck ;)";

  useEffect(() => {
    // Track page visit
    const pageName = 'QR1';
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    if (!visitedPages.includes(pageName)) {
      visitedPages.push(pageName);
      sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    }
    
    // Log all visited pages to console
    console.log('=== Visited Pages ===');
    console.log(visitedPages);
    console.log('=====================');
  }, []);

  useEffect(() => {
    let index1 = 0;
    const timer1 = setInterval(() => {
      if (index1 < fullText1.length) {
        setText1(fullText1.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(timer1);
        // Start second text after first completes
        setTimeout(() => {
          let index2 = 0;
          const timer2 = setInterval(() => {
            if (index2 < fullText2.length) {
              setText2(fullText2.slice(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);
              // Show audio after second text completes
              setTimeout(() => {
                setShowAudio(true);
                // Start third text after audio appears
                setTimeout(() => {
                  let index3 = 0;
                  const timer3 = setInterval(() => {
                    if (index3 < fullText3.length) {
                      setText3(fullText3.slice(0, index3 + 1));
                      index3++;
                    } else {
                      clearInterval(timer3);
                    }
                  }, 100);
                }, 500);
              }, 500);
            }
          }, 80);
        }, 500);
      }
    }, 150);

    return () => clearInterval(timer1);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontSize: "24px", marginBottom: "20px", minHeight: "30px" }}>
        {text1}
        {text1.length > 0 && text1.length < fullText1.length && (
          <span
            style={{
              animation: "blink 1s infinite",
            }}
          >
            |
          </span>
        )}
      </div>
      <div style={{ fontSize: "20px", marginBottom: "30px", minHeight: "30px" }}>
        {text2}
        {text2.length > 0 && text2.length < fullText2.length && (
          <span
            style={{
              animation: "blink 1s infinite",
            }}
          >
            |
          </span>
        )}
      </div>
      {showAudio && (
        <audio
          controls
          style={{
            marginBottom: "30px",
            width: "100%",
            maxWidth: "500px",
            animation: "fadeIn 0.5s ease-in",
          }}
        >
          <source src="/Pipline University Colony 4 (1).mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      <div style={{ fontSize: "20px", minHeight: "30px" }}>
        {text3}
        {text3.length > 0 && text3.length < fullText3.length && (
          <span
            style={{
              animation: "blink 1s infinite",
            }}
          >
            |
          </span>
        )}
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default QR1;
