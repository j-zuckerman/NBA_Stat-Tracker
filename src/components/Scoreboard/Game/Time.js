import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Time = ({ time }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {time}
    </Typography>
  );
};
