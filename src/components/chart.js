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

export const Chart = ({ playerDetails }) => {
  let data = [];
  let lastTenGames = [];
  let counter = 0;
  playerDetails.forEach((element, index) => {
    var lastTenGamesStat = element.lastTenGamesStats.data.slice(
      Math.max(element.lastTenGamesStats.data.length - 10, 1)
    );

    let gameStats = [];
    lastTenGamesStat.forEach((game, index) => {
      gameStats.push({
        name: playerDetails[counter].playerDetails.first_name,
        assist: game.ast,
        gameNumber: index + 1
      });
    });
    counter++;
    data.push(gameStats);
  });
  console.log(data);

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

      <Line type="monotone" dataKey={data.assist} stroke="#82ca9d" />
    </LineChart>
  );
};
