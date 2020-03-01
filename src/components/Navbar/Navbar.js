import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Navbar = () => {
  return (
    <Grid container spacing={2}>
      <Grid item alignContent="flex-start">
        <Typography variant="body2">NBA</Typography>
      </Grid>

      <Grid item alignContent="center">
        <Typography variant="body2">NBA</Typography>
      </Grid>
    </Grid>
  );
};
