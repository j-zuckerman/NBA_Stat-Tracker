import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const LastTenGamesStats = ({ stats }) => {
  console.log(stats);
  let rows = [];

  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  function createData(
    min,
    fgm,
    fga,
    fg3m,
    fg3a,
    ftm,
    fta,
    oreb,
    dreb,
    reb,
    ast,
    stl,
    blk,
    to,
    pf,
    pts,
    fg_pct,
    fg3_pct,
    ft_pct
  ) {
    return {
      min,
      fgm,
      fga,
      fg3m,
      fg3a,
      ftm,
      fta,
      oreb,
      dreb,
      reb,
      ast,
      stl,
      blk,
      to,
      pf,
      pts,
      fg_pct,
      fg3_pct,
      ft_pct
    };
  }
  if (stats) {
    var lastTenStats = stats.data.slice(Math.max(stats.data.length - 10, 1));

    console.log(lastTenStats);
    lastTenStats.forEach(element => {
      rows.push(
        createData(
          element.min,
          element.fgm,
          element.fga,
          element.fg3m,
          element.fg3a,
          element.ftm,
          element.fta,
          element.oreb,
          element.dreb,
          element.reb,
          element.ast,
          element.stl,
          element.blk,
          element.turnover,
          element.pf,
          element.pts,
          element.fg_pct,
          element.fg3_pct,
          element.ft_pct
        )
      );
    });
  }

  console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>GP</TableCell>

            <TableCell align="right">fgm</TableCell>
            <TableCell align="right">fga</TableCell>
            <TableCell align="right">fg3m</TableCell>
            <TableCell align="right">fg3a</TableCell>
            <TableCell align="right">ftm</TableCell>
            <TableCell align="right">fta</TableCell>
            <TableCell align="right">oreb</TableCell>
            <TableCell align="right">dreb</TableCell>
            <TableCell align="right">reb</TableCell>
            <TableCell align="right">ast</TableCell>
            <TableCell align="right">stl</TableCell>
            <TableCell align="right">blk</TableCell>
            <TableCell align="right">to</TableCell>
            <TableCell align="right">pf</TableCell>
            <TableCell align="right">pts</TableCell>
            <TableCell align="right">fg_pct</TableCell>
            <TableCell align="right">fg3_pct</TableCell>
            <TableCell align="right">ft_pct</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="right">{row.min}</TableCell>
              <TableCell align="right">{row.fgm}</TableCell>
              <TableCell align="right">{row.fga}</TableCell>
              <TableCell align="right">{row.fg3m}</TableCell>
              <TableCell align="right">{row.fg3a}</TableCell>
              <TableCell align="right">{row.ftm}</TableCell>
              <TableCell align="right">{row.fta}</TableCell>
              <TableCell align="right">{row.oreb}</TableCell>
              <TableCell align="right">{row.dreb}</TableCell>
              <TableCell align="right">{row.reb}</TableCell>
              <TableCell align="right">{row.ast}</TableCell>
              <TableCell align="right">{row.stl}</TableCell>
              <TableCell align="right">{row.blk}</TableCell>
              <TableCell align="right">{row.to}</TableCell>
              <TableCell align="right">{row.pf}</TableCell>
              <TableCell align="right">{row.pts}</TableCell>
              <TableCell align="right">{row.fg_pct}</TableCell>
              <TableCell align="right">{row.fg3_pct}</TableCell>
              <TableCell align="right">{row.ft_pct}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LastTenGamesStats;
