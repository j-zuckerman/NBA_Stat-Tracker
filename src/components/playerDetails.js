import React from 'react';

const PlayerDetails = ({ details }) => {
  return (
    <div>
      <h4>{details.first_name + ' ' + details.last_name}</h4>
      <p>{details.position + ' | ' + details.team.name}</p>
    </div>
  );
};

export default PlayerDetails;
