import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Player from './player';
import PlayerDetails from './playerDetails';
import SeasonAverages from './seasonAverages';
import { fetchSeasonAverages } from '../reducers/seasonAveragesReducer';
import { fetchPlayerDetails } from '../reducers/playerDetailsReducer';
import { PlayerSelect } from './playerSelect';
import LastTenGamesStats from './lastTenGamesStats';

const Players = props => {
  const [playerIDs, addPlayerID] = useState([237, 118]);
  const [selected, setSelected] = useState(0);

  const handleChange = event => {
    setSelected(event.target.value);
  };

  const addPlayer = id => addPlayerID(playerIDs.push(id));

  useEffect(() => {
    props.fetchPlayerDetails(playerIDs);
  }, playerIDs);

  return props.playerStats ? (
    <div>
      {props.playerStats.playerInfo.map((player, index) => (
        <Player
          details={player}
          seasonAverage={props.playerStats.seasonAverages[index]}
        />
      ))}

      <PlayerSelect
        handleChange={handleChange}
        playerNames={props.playerStats.playerInfo}
      />
      <LastTenGamesStats stats={props.playerStats.stats[selected]} />
    </div>
  ) : (
    <div>loading</div>
  );
};

const mapStateToProps = state => {
  return {
    playerStats: state.players.details
  };
};

const mapDispatchToProps = {
  fetchPlayerDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
