import React from 'react';
import NBAScoreboardProvider from '../../context/NBAScoreboardContext';
import { AllGames } from '../Scoreboard/AllGames';
import { Navbar } from '../Navbar/Navbar';
import { DateNavigation } from '../Date/DateNavigation';

import Divider from '@material-ui/core/Divider';

export const ScoreboardDisplay = () => {
  return (
    <>
      <Navbar />
      <NBAScoreboardProvider>
        <DateNavigation />
        <Divider />
        <AllGames />
      </NBAScoreboardProvider>
    </>
  );
};
