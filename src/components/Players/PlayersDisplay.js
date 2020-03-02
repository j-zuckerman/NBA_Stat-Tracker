import React from 'react';
import { SearchBar } from '../Search/SearchBar';
import { PlayerChips } from '../Players/PlayerChips';
import NBAPlayerProvider from '../../context/NBAPlayerContext';
import { Navbar } from '../Navbar/Navbar';
import Players from '../Players/Players';

export const PlayerDisplay = () => {
  return (
    <>
      <Navbar />
      <NBAPlayerProvider>
        <SearchBar />
        <PlayerChips />
        <Players />
      </NBAPlayerProvider>
    </>
  );
};
