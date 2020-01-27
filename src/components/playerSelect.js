import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const PlayerSelect = ({ playerStats, handleChange }) => {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        Lebron James
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        labelWidth={labelWidth}
        onChange={handleChange}
      >
        {playerStats.map((player, index) => (
          <MenuItem value={index}>
            {player.playerDetails.first_name +
              ' ' +
              player.playerDetails.last_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
