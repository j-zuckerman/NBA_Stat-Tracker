import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image: {
    width: 128,
    height: 128
  }
}));

export const TeamLogo = ({ teamAbbreviation }) => {
  const classes = useStyles();

  return (
    <img
      width={80}
      height={80}
      src={process.env.PUBLIC_URL + `/teams/${teamAbbreviation}.svg`}
    />
  );
};
