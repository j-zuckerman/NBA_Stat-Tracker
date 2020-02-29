import React, { useState, useContext } from 'react';
import { NBAPlayerContext } from '../../context/NBAPlayerContext';
import NBA_api from '../../api/NBA_api';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const SearchBar = () => {
  const { fetchFullPlayerData } = useContext(NBAPlayerContext);

  const [searchResults, setSearchResults] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = async e => {
    const query = e.target.value;
    setTextFieldValue(query);

    const res = await NBA_api.get(`/players?search=${query}&per_page=5`);
    console.log(res.data);
    setSearchResults(res.data.data);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await NBA_api.get(
      `/players?search=${textFieldValue}&per_page=1`
    );

    const id = res.data.data[0].id;
    setTextFieldValue('');
    fetchFullPlayerData(id);
  };

  return (
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
  );
};
