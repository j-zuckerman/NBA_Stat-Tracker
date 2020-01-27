import React from 'react';
import { useEffect, useState } from 'react';
import Player from './player';
import NBA_api from '../api/NBA_api';
import { PlayerSelect } from './playerSelect';
import { LastTenGamesStats } from './lastTenGamesStats';
import Divider from '@material-ui/core/Divider';
import { Chart } from './chart';

const Players = () => {
  const [playerID, setPlayerID] = useState(237);
  const [selected, setSelected] = useState(0);
  const [playerDetails, setPlayerDetails] = useState([]);
  const [seasonAverages, setSeasonAverages] = useState([]);
  const [lastTenGameStats, setLastTenGameStats] = useState([]);
  const [playersStats, setPlayersStats] = useState([]);

  async function fetchPlayerDetails(id) {
    const res = await NBA_api.get(`/players/${id}`);
    return res.data;
  }

  async function fetchSeasonAverages(id) {
    const res = await NBA_api.get(
      `season_averages?season=2018&player_ids[]=${id}`
    );

    return res.data;
  }

  async function fetchLastTenGameStats(id) {
    const res = await NBA_api.get(
      `stats?player_ids[]=${id}&seasons[]=2018&seasons[]=2019&per_page=82`
    );
    return res.data;
  }

  async function fetchFullPlayerStats(id) {
    const playerDetails = await fetchPlayerDetails(id);
    const seasonAverages = await fetchSeasonAverages(id);
    const lastTenGamesStats = await fetchLastTenGameStats(id);
    console.log(playerDetails);
    const playerStat = { playerDetails, seasonAverages, lastTenGamesStats };
    setPlayersStats(playersStats => [...playersStats, playerStat]);
  }

  useEffect(() => {
    console.log(playersStats);
  }, [playersStats]);

  useEffect(() => {
    fetchFullPlayerStats(237);
  }, []);

  const handleChange = event => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <h1 className="center">’18 to ’19 Season Averages</h1>
      <Divider light />
      {playersStats.map((player, index) => (
        <Player
          details={player.playerDetails}
          seasonAverage={player.seasonAverages}
        />
      ))}

      <h1 className="center">All Stats For Last 10 Games Played</h1>
      <PlayerSelect handleChange={handleChange} playerStats={playersStats} />
      <Divider light />
      <LastTenGamesStats playerDetails={playersStats[selected]} />
    </div>
  );
};
//<Chart playerDetails={playersStats} />
export default Players;
