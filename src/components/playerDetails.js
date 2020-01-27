import React from 'react';

const PlayerDetails = ({ details }) => {
  return (
    <div>
      <h3>{details.first_name + ' ' + details.last_name}</h3>
      <p>{details.position + ' | ' + details.team.name}</p>
    </div>
  );
};

export default PlayerDetails;
