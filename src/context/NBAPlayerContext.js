import React, { createContext, useState, useEffect } from 'react';
import NBA_api from '../api/NBA_api';

export const NBAPlayerContext = createContext();

const NBAPlayerProvider = ({ children }) => {
  const [playersData, setPlayersData] = useState([]);
  const [chipData, setChipData] = useState([]);

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

  async function fetchFullPlayerData(id) {
    const playerDetails = await fetchPlayerDetails(id);
    const seasonAverages = await fetchSeasonAverages(id);
    const lastTenGamesStats = await fetchLastTenGameStats(id);

    const playerData = { playerDetails, seasonAverages, lastTenGamesStats };

    let playerChipData = {
      name:
        playerData.playerDetails.first_name +
        ' ' +
        playerData.playerDetails.last_name,
      key: playerData.playerDetails.id
    };

    setPlayersData(playersData => [...playersData, playerData]);
    setChipData(chipData => [...chipData, playerChipData]);
  }

  useEffect(() => {
    fetchFullPlayerData(237);
    fetchFullPlayerData(15);
  }, []);

  return (
    <NBAPlayerContext.Provider
      value={{
        playersData,
        setPlayersData,
        chipData,
        setChipData,
        fetchFullPlayerData
      }}
    >
      {children}
    </NBAPlayerContext.Provider>
  );
};

export default NBAPlayerProvider;
