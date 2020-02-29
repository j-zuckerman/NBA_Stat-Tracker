import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const LastTenGamesStats = ({ playerData, selected }) => {
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
  if (playerData) {
    var lastTenStats = playerData.lastTenGamesStats.data.slice(
      Math.max(playerData.lastTenGamesStats.data.length - 10, 1)
    );

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

  return (
    <TableContainer component={Paper}>
      <Table
        className={(classes.table, classes.color)}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>MIN</TableCell>

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
