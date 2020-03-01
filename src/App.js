import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NBAPlayerProvider from './context/NBAPlayerContext';
import NBAScoreboardProvider from './context/NBAScoreboardContext';

import Players from './components/Players/Players';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import { SearchBar } from './components/Search/SearchBar';
import { PlayerChips } from './components/Players/PlayerChips';
import './css/styles.css';
import { AllGames } from './components/Scoreboard/AllGames';
import { Navbar } from './components/Navbar/Navbar';
import { DateNavigation } from './components/Date/DateNavigation';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container>
          <Route path="/games">
            <NBAScoreboardProvider>
              <DateNavigation />
              <Divider />
              <AllGames />
            </NBAScoreboardProvider>
          </Route>
          <Route path="/players">
            <NBAPlayerProvider>
              <SearchBar />
              <PlayerChips />
              <Players />
            </NBAPlayerProvider>
          </Route>
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
