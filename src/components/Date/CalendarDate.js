import React, { useContext } from 'react';
import { NBAScoreboardContext } from '../../context/NBAScoreboardContext';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    cursor: 'pointer'
  }
}));

export const CalendarDate = ({ date }) => {
  const { fetchScores } = useContext(NBAScoreboardContext);
  const classes = useStyles();

  return (
    <Paper className={classes.paper} onClick={() => fetchScores(date.url)}>
      <Typography variant="h6" color="textSecondary">
        {date.formmattedDate}
      </Typography>
    </Paper>
  );
};
