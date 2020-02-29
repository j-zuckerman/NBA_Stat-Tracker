import React from 'react';
import NBAPlayerProvider from './context/NBAPlayerContext';
import Players from './components/Players/Players';
import Container from '@material-ui/core/Container';
import './css/styles.css';
import { SearchBar } from './components/Search/SearchBar';
import { PlayerChips } from './components/Players/PlayerChips';

const App = () => {
  return (
    <NBAPlayerProvider>
      <Container>
        <SearchBar />
        <PlayerChips />
        <Players />
      </Container>
    </NBAPlayerProvider>
  );
};

export default App;
