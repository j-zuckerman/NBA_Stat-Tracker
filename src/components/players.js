import React from 'react';
import { useEffect, useState } from 'react';
import Player from './player';
import PlayerDetails from './playerDetails';
import SeasonAverages from './seasonAverages';
import NBA_api from '../api/NBA_api';
import { PlayerSelect } from './playerSelect';
import LastTenGamesStats from './lastTenGamesStats';

const Players = () => {
  const [playerID, setPlayerID] = useState(237);
  const [selected, setSelected] = useState(0);
  const [playerDetails, setPlayerDetails] = useState([]);
  const [seasonAverages, setSeasonAverages] = useState([]);
  const [lastTenGameStats, setLastTenGameStats] = useState([]);

  async function fetchPlayerDetails(id) {
    const res = await NBA_api.get(`/players/${id}`);
    console.log(res.data);
    setPlayerDetails([...playerDetails, res.data]);
  }

  async function fetchSeasonAverages(id) {
    const res = await NBA_api.get(
      `season_averages?season=2018&player_ids[]=${id}`
    );
    console.log(res.data);
    setSeasonAverages([...seasonAverages, res.data]);
  }

  async function fetchLastTenGameStats(id) {
    const res = await NBA_api.get(
      `stats?player_ids[]=${id}&seasons[]=2018&seasons[]=2019&per_page=82`
    );
    console.log(res.data);
    setLastTenGameStats([...lastTenGameStats, res.data]);
  }
  useEffect(() => {
    console.log(playerDetails);
  }, [playerDetails]);

  useEffect(() => {
    fetchPlayerDetails(playerID);
    fetchSeasonAverages(playerID);
    fetchLastTenGameStats(playerID);
  }, [playerID]);

  const handleChange = event => {
    setSelected(event.target.value);
  };

  return (
    <div>
      {playerDetails.map((player, index) => (
        <Player details={player} seasonAverage={seasonAverages[index]} />
      ))}
      <PlayerSelect handleChange={handleChange} playerNames={playerDetails} />
      <LastTenGamesStats stats={lastTenGameStats[selected]} />
    </div>
  );
};

export default Players;
