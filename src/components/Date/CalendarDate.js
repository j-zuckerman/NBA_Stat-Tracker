import React from 'react';
import Typography from '@material-ui/core/Typography';

export const CalendarDate = ({ date }) => {
  return (
    <Typography variant="h6" color="textSecondary" gutterBottom>
      {date.formmattedDate}
    </Typography>
  );
};
