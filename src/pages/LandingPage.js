import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our App</h1>
      <p>Explore our features:</p>
      <div style={{ margin: '20px' }}>
        <Link to="/chat" style={{ marginRight: '20px', textDecoration: 'none', color: 'blue' }}>
          Go to Chat
        </Link>
        <Link to="/create-art" style={{ textDecoration: 'none', color: 'blue' }}>
          Create Art
        </Link>
      </div>
    </div>
  );
}

export default LandingPage; 