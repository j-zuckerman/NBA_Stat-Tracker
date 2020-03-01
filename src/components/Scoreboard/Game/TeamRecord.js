import React from 'react';
import Typography from '@material-ui/core/Typography';

export const TeamRecord = ({ wins, losses }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {wins} - {losses}
    </Typography>
  );
};
