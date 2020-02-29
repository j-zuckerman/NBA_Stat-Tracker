import React, { useContext } from 'react';
import { NBAScoreboardContext } from '../../context/NBAScoreboardContext';

export const Score = () => {
  const { scoreboard } = useContext(NBAScoreboardContext);
  return (
    <div>
      <h2>{scoreboard}</h2>
    </div>
  );
};
