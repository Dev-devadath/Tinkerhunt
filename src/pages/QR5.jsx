import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CodeProtectedPage from '../components/CodeProtectedPage';

function QR5() {
  const navigate = useNavigate();
  const [text1, setText1] = useState('');
  const [showGif, setShowGif] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoText, setVideoText] = useState('');
  const [showVideoElement, setShowVideoElement] = useState(false);
  const [showFunButton, setShowFunButton] = useState(false);

  const fullText1 = "Good but it's not over yet";
  const fullVideoText = 'Here is your next clue';

  useEffect(() => {
    // Check if previous page was visited
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    // if (!visitedPages.includes('QR4')) {
    //   // Redirect to no cheat page if QR4 wasn't visited
    //   navigate('/nocheat');
    //   return;
    // }
    
    // Track page visit
    const pageName = 'QR5';
    
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
    setShowVideo(true);
    // Start typing the video text
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullVideoText.length) {
        setVideoText(fullVideoText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Show video after text completes
        setTimeout(() => {
          setShowVideoElement(true);
          // Show fun button after video appears
          setTimeout(() => {
            setShowFunButton(true);
          }, 500);
        }, 500);
      }
    }, 80);
  };

  return (
    <CodeProtectedPage requiredCode="7dg4">
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
      {!showVideo ? (
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
              src="/assets/clowclap.gif" 
              alt="Slow Clap"
              onError={(e) => {
                console.log('Image failed to load:', e.target.src);
                e.target.src = '/public/assets/clowclap.gif';
              }}
              style={{ 
                maxWidth: '400px',
                width: '100%',
                marginBottom: '30px',
                animation: 'fadeIn 0.5s ease-in',
                display: 'block'
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
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <div style={{ 
            fontSize: '24px', 
            marginBottom: '30px',
            minHeight: '30px'
          }}>
            {videoText}
            {videoText.length > 0 && videoText.length < fullVideoText.length && (
              <span style={{ animation: 'blink 1s infinite' }}>|</span>
            )}
          </div>
          
          {showVideoElement && (
            <video 
              autoPlay
              loop
              muted
              playsInline
              style={{ 
                width: '100%',
                maxWidth: '700px',
                marginBottom: '30px',
                animation: 'fadeIn 0.5s ease-in'
              }}
            >
              <source src="/assets/IMG_7557 3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {showFunButton && (
            <div style={{
              fontSize: '24px',
              marginTop: '20px',
              fontFamily: 'monospace',
              animation: 'fadeIn 0.5s ease-in'
            }}>
              Have Fun
            </div>
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
    </CodeProtectedPage>
  );
}

export default QR5;

