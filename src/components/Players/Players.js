import React, { useContext, useState } from 'react';
import { NBAPlayerContext } from '../../context/NBAPlayerContext';

import Player from './Player/Player';
import { PlayerSelect } from './PlayerSelect';
import { LastTenGamesStats } from './Player/LastTenGamesStats';

import Divider from '@material-ui/core/Divider';

const Players = () => {
  const [selected, setSelected] = useState(0);
  const { playersData } = useContext(NBAPlayerContext);

  const handlePlayerChange = event => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>’18 to ’19 Season Averages</h1>
      <Divider />
      {playersData.map(player => (
        <Player
          details={player.playerDetails}
          seasonAverage={player.seasonAverages}
        />
      ))}

      <h1 style={{ textAlign: 'center' }}>
        All Stats For Last 10 Games Played
      </h1>
      <PlayerSelect
        handlePlayerChange={handlePlayerChange}
        playersData={playersData}
      />

      <LastTenGamesStats playerData={playersData[selected]} />
    </div>
  );
};

export default Players;
