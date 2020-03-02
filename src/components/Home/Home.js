import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  return (
    <div id="flex-container">
      <div className="flex-item">
        <h1>NBA Scoreboard</h1>
      </div>
      <div className="flex-item">
        <h2>
          Web application to view current game scores and compare NBA
          players&#39; stats.
        </h2>
        <h2>Created using React and Material UI.</h2>
      </div>

      <div className="flex-item">
        <Link style={{ padding: 10, fontSize: 25 }} to="/games">
          View Current Games
        </Link>
        <Link style={{ padding: 10, fontSize: 25 }} to="/players">
          Compare Players&#39; Stats
        </Link>
      </div>
    </div>
  );
};
