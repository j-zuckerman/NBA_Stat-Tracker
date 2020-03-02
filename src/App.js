import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NBAPlayerProvider from './context/NBAPlayerContext';
import NBAScoreboardProvider from './context/NBAScoreboardContext';

import Players from './components/Players/Players';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import { SearchBar } from './components/Search/SearchBar';
import { PlayerChips } from './components/Players/PlayerChips';
import { AllGames } from './components/Scoreboard/AllGames';
import { Navbar } from './components/Navbar/Navbar';
import { DateNavigation } from './components/Date/DateNavigation';
import { Home } from './components/Home/Home';

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/games">
            <Navbar />
            <NBAScoreboardProvider>
              <DateNavigation />
              <Divider />
              <AllGames />
            </NBAScoreboardProvider>
          </Route>
          <Route exact path="/players">
            <Navbar />
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
