import React from 'react';
import { useEffect, useState } from 'react';
import Player from './player';
import NBA_api from '../api/NBA_api';
import { PlayerSelect } from './playerSelect';
import { LastTenGamesStats } from './lastTenGamesStats';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Chart } from './chart';
import { PlayerChips } from './playerChips';

const Players = () => {
  const [selected, setSelected] = useState(0);
  const [playersStats, setPlayersStats] = useState([]);
  const [numOfPlayers, incrementNumOfPlayers] = useState(0);
  const [chipData, setChipData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    setPlayersStats(playersStats =>
      playersStats.filter(
        playersStats => playersStats.playerDetails.id !== chipToDelete.key
      )
    );
  };

  const handleAdd = chipToAdd => {
    setChipData(chipData => [...chipData, chipToAdd]);
  };

  const handleChange = event => {
    setSelected(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await NBA_api.get(
      `/players?search=${textFieldValue}&per_page=1`
    );

    const id = res.data.data[0].id;
    setTextFieldValue('');
    fetchFullPlayerStats(id);
  };

  const handleTextFieldChange = async e => {
    const query = e.target.value;
    setTextFieldValue(query);

    const res = await NBA_api.get(`/players?search=${query}&per_page=5`);
    console.log(res.data);
    setSearchResults(res.data.data);
  };

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
    const playerChipData = {
      name: playerDetails.first_name + ' ' + playerDetails.last_name,
      key: playerDetails.id
    };
    handleAdd(playerChipData);
    incrementNumOfPlayers(numOfPlayers + 1);
  }

  useEffect(() => {
    console.log(playersStats);
  }, [playersStats]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    fetchFullPlayerStats(237);
    fetchFullPlayerStats(15);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          id="player-search"
          freeSolo
          options={searchResults.map(
            option => option.first_name + ' ' + option.last_name
          )}
          renderInput={params => (
            <TextField
              {...params}
              value={textFieldValue}
              onChange={handleTextFieldChange}
              label="Player"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </form>

      <PlayerChips
        chipData={chipData}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
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
//<Chart numberOfPlayers={numOfPlayers} playerDetails={playersStats} />
export default Players;
