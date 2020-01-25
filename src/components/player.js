import React from 'react';
import PlayerDetails from './playerDetails';
import { SeasonAverages } from './seasonAverages';
import LastTenGamesStats from './lastTenGamesStats';

const Player = ({ details, seasonAverage, stats }) => {
  return (
    <div>
      <PlayerDetails details={details} />
      <SeasonAverages seasonAverages={seasonAverage} />
      <LastTenGamesStats stats={stats} />
    </div>
  );
};

export default Player;
