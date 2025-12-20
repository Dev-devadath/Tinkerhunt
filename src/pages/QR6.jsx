import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function QR6() {
  const navigate = useNavigate();
  const [text1, setText1] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [clueText, setClueText] = useState('');

  const fullText1 = "You are nearing the end... This will be the last clue.";
  const fullClueText = "This is your clue";

  // Binary/Base64 image data as the clue - this could decode to a URL or another clue
  const binaryClue = `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`;
  
  useEffect(() => {
    // Check if previous page was visited
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    // if (!visitedPages.includes('QR5')) {
    //   // Redirect to no cheat page if QR5 wasn't visited
    //   navigate('/nocheat');
    //   return;
    // }
    
    // Track page visit
    const pageName = 'QR6';
    
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
        setTimeout(() => {
          setShowButton(true);
        }, 500);
      }
    }, 80);

    return () => clearInterval(timer1);
  }, []);

  const handleNextClue = () => {
    setShowClue(true);
    // Start typing the clue text
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullClueText.length) {
        setClueText(fullClueText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
  };

  return (
    <div style={{ 
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
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
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <div style={{ 
            fontSize: '20px', 
            marginBottom: '30px',
            minHeight: '30px'
          }}>
            {clueText}
            {clueText.length > 0 && clueText.length < fullClueText.length && (
              <span style={{ animation: 'blink 1s infinite' }}>|</span>
            )}
          </div>
          
          {clueText.length >= fullClueText.length && (
            <>
              <textarea
                readOnly
                value={binaryClue}
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#f9f9f9',
                  color: '#000',
                  border: '2px solid #ccc',
                  borderRadius: '0',
                  padding: '20px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  resize: 'none',
                  boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.1)',
                  animation: 'fadeIn 0.5s ease-in',
                  lineHeight: '1.6',
                  cursor: 'text',
                  userSelect: 'text'
                }}
                onClick={(e) => e.target.select()}
              />
              
              <p style={{ 
                marginTop: '20px',
                fontSize: '14px',
                color: '#666',
                fontStyle: 'italic',
                animation: 'fadeIn 0.5s ease-in'
              }}>
                Hint: The truth lies between this encoded stuff
              </p>
            </>
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

export default QR6;
