import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function QR7() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if previous page was visited
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    if (!visitedPages.includes('QR6')) {
      // Redirect to no cheat page if QR6 wasn't visited
      navigate('/nocheat');
      return;
    }
    
    // Track page visit
    const pageName = 'QR7';
    
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
    <div style={{ 
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      qr7
    </div>
  );
}

export default QR7;

