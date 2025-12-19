import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ 
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <h1>Treasure Hunt</h1>
      
      <Link to="/start">Start</Link>
      <Link to="/t1nk">QR 1</Link>
      <Link to="/2rhb">QR 2</Link>
      <Link to="/t3nk">QR 3</Link>
      <Link to="/7dg4">QR 4</Link>
      <Link to="/j5kj">QR 5</Link>
      <Link to="/lsg6">QR 6</Link>
      <Link to="/ja7u">QR 7</Link>
      <Link to="/dev8">QR 8</Link>
      <Link to="/nou9">QR 9</Link>
      <Link to="/la10">QR 10</Link>
      <Link to="/w7t3">Secret 🎵</Link>
    </div>
  );
}

export default Home;

