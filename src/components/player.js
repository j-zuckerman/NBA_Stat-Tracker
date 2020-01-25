import React from 'react';
import PlayerDetails from './playerDetails';
import { SeasonAverages } from './seasonAverages';
import LastTenGamesStats from './lastTenGamesStats';

const Player = ({ details, seasonAverage }) => {
  return (
    <div>
      <PlayerDetails details={details} />
      <SeasonAverages seasonAverages={seasonAverage} />
    </div>
  );
};

export default Player;
