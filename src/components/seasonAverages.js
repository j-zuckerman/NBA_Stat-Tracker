import React from 'react';

const SeasonAverages = ({ seasonAverages }) => {
  return (
    <div>
      {seasonAverages.data.map(seasonAverage => (
        <p>{seasonAverage.games_played}</p>
      ))}
    </div>
  );
};

export default SeasonAverages;
