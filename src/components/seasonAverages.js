import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const SeasonAverages = ({ seasonAverages }) => {
  console.log(seasonAverages);
  let rows = [];

  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  function createData(
    gp,
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
      gp,
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
  if (seasonAverages) {
    rows.push(
      createData(
        seasonAverages.data[0].games_played,
        seasonAverages.data[0].min,
        seasonAverages.data[0].fgm,
        seasonAverages.data[0].fga,
        seasonAverages.data[0].fg3m,
        seasonAverages.data[0].fg3a,
        seasonAverages.data[0].ftm,
        seasonAverages.data[0].fta,
        seasonAverages.data[0].oreb,
        seasonAverages.data[0].dreb,
        seasonAverages.data[0].reb,
        seasonAverages.data[0].ast,
        seasonAverages.data[0].stl,
        seasonAverages.data[0].blk,
        seasonAverages.data[0].turnover,
        seasonAverages.data[0].pf,
        seasonAverages.data[0].pts,
        seasonAverages.data[0].fg_pct,
        seasonAverages.data[0].fg3_pct,
        seasonAverages.data[0].ft_pct
      )
    );
  }
  // console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>GP</TableCell>
            <TableCell align="right">min</TableCell>
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
              <TableCell align="right">{row.gp}</TableCell>
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
