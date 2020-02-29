import React from 'react';
import { Details } from './Details';
import { SeasonAverages } from './SeasonAverages';

const Player = ({ details, seasonAverage }) => {
  return (
    <div>
      <Details details={details} />
      <SeasonAverages seasonAverages={seasonAverage} />
    </div>
  );
};

export default Player;
