import React from 'react';
import TextField from '@material-ui/core/TextField';

const App = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="player-search" label="Player" variant="outlined" />
    </form>
  );
};

export default App;
