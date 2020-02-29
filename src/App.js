import React from 'react';
import NBAPlayerProvider from './context/NBAPlayerContext';
import NBAScoreboardProvider from './context/NBAScoreboardContext';

import Players from './components/Players/Players';
import Container from '@material-ui/core/Container';

import { SearchBar } from './components/Search/SearchBar';
import { PlayerChips } from './components/Players/PlayerChips';
import './css/styles.css';
import { Score } from './components/Scoreboard/Score';

const App = () => {
  return (
    <Container>
      <NBAScoreboardProvider>
        <Score />
      </NBAScoreboardProvider>
      <NBAPlayerProvider>
        <SearchBar />
        <PlayerChips />
        <Players />
      </NBAPlayerProvider>
    </Container>
  );
};

export default App;
