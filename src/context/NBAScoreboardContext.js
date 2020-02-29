import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NBAScoreboardContext = createContext();

const NBAScoreboardProvider = ({ children }) => {
  const [scoreboard, setScoreboard] = useState([]);
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  const fetchScores = async date => {
    const url = `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${date}/games.json`;
    const url2 = `http://data.nba.net/data/10s/prod/v2/${date}/scoreboard.json`;
    try {
      const res = await fetch(proxy + url);
      const data = await res.json();

      const res2 = await fetch(proxy + url2);
      const data2 = await res2.json();

      let formattedData = [];

      data.sports_content.games.game.forEach((game, index) => {
        let gameDetails = {};
        gameDetails.id = game.id;
        gameDetails.time = game.time;

        gameDetails.visitor = {
          abbreviation: game.visitor.abbreviation,
          nickname: game.visitor.nickname,
          score: game.visitor.score,

          record: {
            wins: data2.games[index].vTeam.win,
            losses: data2.games[index].vTeam.loss
          }
        };

        gameDetails.home = {
          abbreviation: game.home.abbreviation,
          nickname: game.home.nickname,
          score: game.home.score,

          record: {
            wins: data2.games[index].hTeam.win,
            losses: data2.games[index].hTeam.loss
          }
        };

        formattedData.push(gameDetails);
      });
      console.log(formattedData);
      console.log(data);
      console.log(data2);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchScores('20200228');
  }, []);

  return (
    <NBAScoreboardContext.Provider
      value={{
        scoreboard,
        setScoreboard
      }}
    >
      {children}
    </NBAScoreboardContext.Provider>
  );
};

export default NBAScoreboardProvider;
