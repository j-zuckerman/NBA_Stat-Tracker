import React from 'react';
import { Home } from './components/Home/Home';
import { ScoreboardDisplay } from './components/Scoreboard/ScoreboardDisplay';
import { PlayerDisplay } from './components/Players/PlayersDisplay';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/games">
            <ScoreboardDisplay />
          </Route>
          <Route exact path="/players">
            <PlayerDisplay />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
