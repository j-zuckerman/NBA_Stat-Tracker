import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Score = ({ score }) => {
  return (
    <Typography variant="h5" color="textSecondary">
      {score}
    </Typography>
  );
};
