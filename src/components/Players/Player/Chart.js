import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export const Chart = ({ playerDetails, numberOfPlayers }) => {
  let data = [];
  console.log(numberOfPlayers);
  let listOfLastTenGamesStats = [];
  playerDetails.forEach(element => {
    for (let i = 0; i < numberOfPlayers; i++) {
      let lastTenGamesStats = element.lastTenGamesStats.data.slice(
        Math.max(element.lastTenGamesStats.data.length - 10, 1)
      );
      listOfLastTenGamesStats.push(lastTenGamesStats);
    }
  });

  console.log(listOfLastTenGamesStats);
  let dataPoint = [];
  listOfLastTenGamesStats.forEach(game => {
    game.forEach(stats => {
      dataPoint.push({ assist: stats.ast });
    });
    data.push(dataPoint);
    dataPoint = [];
  });
  let formattedData = [];

  console.log(data);

  let getVal = x => {
    return x.assist;
  };
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="gameNumber" />
      <YAxis dataKey="assist" />
      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="gameNumber" stroke="#82ca9d" />

      <Line type="monotone" dataKey={getVal} stroke="#82ca9d" />
    </LineChart>
  );
};
