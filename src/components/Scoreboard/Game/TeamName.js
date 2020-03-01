import React from 'react';
import Typography from '@material-ui/core/Typography';

export const TeamName = ({ name }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {name}
    </Typography>
  );
};
