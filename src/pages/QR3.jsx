import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function QR3() {
  const navigate = useNavigate();
  const [text1, setText1] = useState('');
  const [showGif, setShowGif] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [clueText, setClueText] = useState('');
  const [showHint, setShowHint] = useState(false);

  const fullText1 = 'Took you long enough';
  const fullClueText = 'The most patient worker here never asks questions, never sleeps, and never signs its work.';

  useEffect(() => {
    // Check if previous page was visited
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    // if (!visitedPages.includes('QR2')) {
    //   // Redirect to no cheat page if QR2 wasn't visited
    //   navigate('/nocheat');
    //   return;
    // }
    
    // Track page visit
    const pageName = 'QR3';
    
    if (!visitedPages.includes(pageName)) {
      visitedPages.push(pageName);
      sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    }
    
    // Log all visited pages to console
    console.log('=== Visited Pages ===');
    console.log(visitedPages);
    console.log('=====================');
  }, [navigate]);

  useEffect(() => {
    let index1 = 0;
    const timer1 = setInterval(() => {
      if (index1 < fullText1.length) {
        setText1(fullText1.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(timer1);
        // Show GIF after first text completes
        setTimeout(() => {
          setShowGif(true);
          // Show button after GIF appears
          setTimeout(() => {
            setShowButton(true);
          }, 500);
        }, 500);
      }
    }, 80);

    return () => clearInterval(timer1);
  }, []);

  const handleNextClue = () => {
    setShowClue(true);
    // Start typing the clue
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullClueText.length) {
        setClueText(fullClueText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Show hint after clue completes
        setTimeout(() => {
          setShowHint(true);
        }, 500);
      }
    }, 50);
  };

  return (
    <div style={{ 
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'monospace'
    }}>
      {!showClue ? (
        <>
          <div style={{ 
            fontSize: '24px', 
            marginBottom: '30px',
            minHeight: '30px'
          }}>
            {text1}
            {text1.length > 0 && text1.length < fullText1.length && (
              <span style={{ animation: 'blink 1s infinite' }}>|</span>
            )}
          </div>
          
          {showGif && (
            <img 
              src="/finally-about-time.gif" 
              alt="Finally, about time"
              style={{ 
                maxWidth: '500px',
                width: '100%',
                marginBottom: '30px',
                animation: 'fadeIn 0.5s ease-in'
              }}
            />
          )}
          
          {showButton && (
            <button
              onClick={handleNextClue}
              style={{
                padding: '10px 30px',
                fontSize: '16px',
                backgroundColor: '#f0f0f0',
                border: '2px outset #ddd',
                borderRadius: '0',
                cursor: 'pointer',
                fontFamily: 'monospace',
                boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                animation: 'fadeIn 0.5s ease-in'
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.border = '2px inset #ddd';
                e.currentTarget.style.boxShadow = 'inset 1px 1px 2px rgba(0,0,0,0.2)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.border = '2px outset #ddd';
                e.currentTarget.style.boxShadow = '2px 2px 0px rgba(0,0,0,0.2)';
              }}
            >
              Next Clue
            </button>
          )}
        </>
      ) : (
        <div style={{ maxWidth: '600px' }}>
          <div style={{ 
            fontSize: '20px', 
            marginBottom: '40px',
            lineHeight: '1.6',
            minHeight: '30px'
          }}>
            {clueText}
            {clueText.length > 0 && clueText.length < fullClueText.length && (
              <span style={{ animation: 'blink 1s infinite' }}>|</span>
            )}
          </div>
          
          {showHint && (
            <p style={{ 
              fontSize: '14px',
              color: '#666',
              fontStyle: 'italic',
              animation: 'fadeIn 0.5s ease-in'
            }}>
              You might get your social muscles tired. That's expected.
            </p>
          )}
        </div>
      )}
      
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

export default QR3;

