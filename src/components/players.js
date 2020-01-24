import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Player from './player';
import PlayerDetails from './playerDetails';
import SeasonAverages from './seasonAverages';
import { fetchSeasonAverages } from '../reducers/seasonAveragesReducer';
import { fetchPlayerDetails } from '../reducers/playerDetailsReducer';

const Players = props => {
  useEffect(() => {
    props.fetchPlayerDetails([237, 118]);
  }, []);

  return props.playerStats ? (
    <div>
      {props.playerStats.playerInfo.map((player, index) => (
        <Player
          details={player}
          seasonAverage={props.playerStats.seasonAverages[index]}
        />
      ))}
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
