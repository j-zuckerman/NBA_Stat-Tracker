import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const SeasonAverages = ({ seasonAverages }) => {
  let rows = [];

  const useStyles = makeStyles({
    table: {
      minWidth: 650
    },

    color: {
      backgroundColor: '#212121'
    },

    tableCell: {
      color: '#eceff1'
    },
    tableHeader: {
      color: 'gray',
      textTransform: 'uppercase'
    }
  });

  const classes = useStyles();

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
      <Table
        className={(classes.table, classes.color)}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>GP</TableCell>
            <TableCell className={classes.tableHeader} align="right">
              min
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              fgm
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              fga
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              fg3m
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              fg3a
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              ftm
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              fta
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              oreb
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              dreb
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              reb
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              ast
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              stl
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              blk
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              to
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              pf
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              pts
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              fg_pct
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              fg3_pct
            </TableCell>
            <TableCell className={classes.tableHeader} align="right">
              ft_pct
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCell} align="right">
                {row.gp}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.min}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fgm}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fga}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fg3m}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fg3a}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.ftm}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fta}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.oreb}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.dreb}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.reb}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.ast}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.stl}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.blk}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.to}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.pf}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.pts}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fg_pct}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fg3_pct}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.ft_pct}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
