import React from 'react';
import TextField from '@material-ui/core/TextField';
import Players from './components/players';

const App = () => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField id="player-search" label="Player" variant="outlined" />
      </form>
      <Players />
    </div>
  );
};

export default App;
