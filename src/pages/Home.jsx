import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(180deg, #8FBF6E 0%, #6FA051 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#2c5f2d' }}>
        Treasure Hunt
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        maxWidth: '600px'
      }}>
        <Link to="/start" style={linkStyle}>Start</Link>
        <Link to="/t1nk" style={linkStyle}>QR 1</Link>
        <Link to="/2rhb" style={linkStyle}>QR 2</Link>
        <Link to="/t3nk" style={linkStyle}>QR 3</Link>
        <Link to="/7dg4" style={linkStyle}>QR 4</Link>
        <Link to="/j5kj" style={linkStyle}>QR 5</Link>
        <Link to="/lsg6" style={linkStyle}>QR 6</Link>
        <Link to="/ja7u" style={linkStyle}>QR 7</Link>
        <Link to="/dev8" style={linkStyle}>QR 8</Link>
        <Link to="/nou9" style={linkStyle}>QR 9</Link>
        <Link to="/la10" style={linkStyle}>QR 10</Link>
        <Link to="/w7t3" style={linkStyle}>Secret 🎵</Link>
      </div>
    </div>
  );
}

const linkStyle = {
  padding: '1rem 2rem',
  background: 'linear-gradient(180deg, #D4904F 0%, #C97E3E 100%)',
  color: '#000',
  textDecoration: 'none',
  borderRadius: '10px',
  border: '3px solid #8B5A2B',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s',
};

export default Home;

