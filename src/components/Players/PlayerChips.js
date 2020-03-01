import React, { useContext, useState, useEffect } from 'react';
import { NBAPlayerContext } from '../../context/NBAPlayerContext';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export const PlayerChips = () => {
  const { chipData, setChipData, setPlayersData } = useContext(
    NBAPlayerContext
  );

  const classes = useStyles();

  const handleChipDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    setPlayersData(playersData =>
      playersData.filter(
        playersData => playersData.playerDetails.id !== chipToDelete.key
      )
    );
  };

  return (
    <Paper style={{ padding: 5, margin: 10 }} className={classes.root}>
      {chipData.map(data => {
        let icon;

        return (
          <Chip
            key={data.key}
            label={data.name}
            onDelete={handleChipDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
};
