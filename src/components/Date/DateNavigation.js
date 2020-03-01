import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { NBAScoreboardContext } from '../../context/NBAScoreboardContext';
import { CalendarDate } from './CalendarDate';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export const DateNavigation = () => {
  const [dates, setDates] = useState([]);
  const { fetchScores } = useContext(NBAScoreboardContext);
  const classes = useStyles();

  const setupDates = () => {
    let allDates = [];

    const date = new Date();
    const yesterdaysDate = moment(date).subtract(1, 'days');
    const yesterdaysDateURL = yesterdaysDate.format('YYYYMMDD');
    allDates.push({
      formmattedDate: yesterdaysDate.format('MMMM Do YYYY'),
      url: yesterdaysDateURL
    });

    const todaysDate = moment(date).add(0, 'days');
    const todaysDateURL = todaysDate.format('YYYYMMDD');
    allDates.push({
      formmattedDate: todaysDate.format('MMMM Do YYYY'),
      url: todaysDateURL
    });

    const tommorrowsDate = moment(date).add(1, 'days');
    const tommorrowsDateURL = tommorrowsDate.format('YYYYMMDD');
    allDates.push({
      formmattedDate: tommorrowsDate.format('MMMM Do YYYY'),
      url: tommorrowsDateURL
    });

    setDates(allDates);
    console.log(allDates);
    fetchScores(todaysDateURL);
  };

  useEffect(() => {
    setupDates();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <Grid container className={classes.root} spacing={4} m={4}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={4}>
            {dates.map(date => (
              <CalendarDate date={date} key={date.url} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
