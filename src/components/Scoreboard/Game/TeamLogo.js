import React from 'react';

export const TeamLogo = ({ teamAbbreviation }) => {
  return (
    <img
      width={80}
      height={80}
      src={process.env.PUBLIC_URL + `/teams/${teamAbbreviation}.svg`}
      alt={teamAbbreviation}
    />
  );
};
