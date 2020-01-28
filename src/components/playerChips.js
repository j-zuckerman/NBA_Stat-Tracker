import React from 'react';
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

export const PlayerChips = ({ chipData, handleDelete, handleAdd }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        return (
          <Chip
            key={data.key}
            label={data.name}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
};
