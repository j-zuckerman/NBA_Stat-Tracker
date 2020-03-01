import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Time } from './Time';
import { TeamLogo } from './TeamLogo';
import { TeamName } from './TeamName';
import { TeamRecord } from './TeamRecord';
import { Score } from './Score';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 350,
    margin: 10
  }
}));

export const Game = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Time time={data.time} />
          </Grid>

          <Grid item container>
            <Grid item container spacing={4}>
              <Grid item>
                <TeamLogo teamAbbreviation={data.home.abbreviation} />
              </Grid>
              <Grid item>
                <TeamName name={data.home.nickname} />
                <TeamRecord
                  wins={data.home.record.wins}
                  losses={data.home.record.losses}
                />
              </Grid>
              <Grid item>
                <Score score={data.home.score} />
              </Grid>
            </Grid>

            <Grid item container spacing={4}>
              <Grid item>
                <TeamLogo teamAbbreviation={data.visitor.abbreviation} />
              </Grid>
              <Grid item>
                <TeamName name={data.visitor.nickname} />
                <TeamRecord
                  wins={data.visitor.record.wins}
                  losses={data.visitor.record.losses}
                />
              </Grid>

              <Grid item>
                <Score score={data.visitor.score} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

//src={process.env.PUBLIC_URL + `/teams/${data.}.svg`}
