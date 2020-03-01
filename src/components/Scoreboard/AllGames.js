import React, { useEffect, useContext } from 'react';
import { NBAScoreboardContext } from '../../context/NBAScoreboardContext';
import { Game } from './Game/Game';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export const AllGames = () => {
  const { scoreboard } = useContext(NBAScoreboardContext);
  const classes = useStyles();

  return (
    <div style={{ padding: 5 }}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-around" spacing={2}>
            {scoreboard.map(game => (
              <Game data={game} key={game.id} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
