import React from 'react';
import TextField from '@material-ui/core/TextField';
import Players from './components/players';
import Container from '@material-ui/core/Container';
import './css/styles.css';
import { makeStyles } from '@material-ui/core/styles';

const App = () => {
  const useStyles = makeStyles({
    inputColor: {
      color: 'white'
    }
  });

  const classes = useStyles();
  return (
    <Container>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.inputColor}
          id="player-search"
          label="Player"
          variant="outlined"
        />
      </form>
      <Players />
    </Container>
  );
};

export default App;
