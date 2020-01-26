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

export const Chart = ({ stats }) => {
  console.log(stats);
  let data = [];
  stats.forEach(element => {
    var lastTenGames = element.data.slice(
      Math.max(element.data.length - 10, 1)
    );
    lastTenGames.forEach((game, index) => {
      data.push({ assist: game.ast, game: index });
    });
  });
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
      <XAxis dataKey="game" />
      <YAxis dataKey="assist" />
      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="game" stroke="#82ca9d" />
      <Line type="monotone" dataKey="assist" stroke="#82ca9d" />
    </LineChart>
  );
};
