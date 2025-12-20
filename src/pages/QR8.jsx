import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CodeProtectedPage from '../components/CodeProtectedPage';

function QR8() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if previous page was visited
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    // if (!visitedPages.includes('QR7')) {
    //   // Redirect to no cheat page if QR7 wasn't visited
    //   navigate('/nocheat');
    //   return;
    // }
    
    // Track page visit
    const pageName = 'QR8';
    
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
    <CodeProtectedPage requiredCode="ja7u">
      <div style={{ 
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        qr8
      </div>
    </CodeProtectedPage>
  );
}

export default QR8;

