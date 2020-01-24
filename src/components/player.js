import React from 'react';
import PlayerDetails from './playerDetails';
import SeasonAverages from './seasonAverages';

const Player = ({ details, seasonAverage }) => {
  return (
    <div>
      <PlayerDetails details={details} />
      <SeasonAverages seasonAverages={seasonAverage} />
    </div>
  );
};

export default Player;
