import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function QR10() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if previous page was visited
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    // if (!visitedPages.includes('QR9')) {
    //   // Redirect to no cheat page if QR9 wasn't visited
    //   navigate('/nocheat');
    //   return;
    // }
    
    // Track page visit
    const pageName = 'QR10';
    
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
      qr 10
    </div>
  );
}

export default QR10;

