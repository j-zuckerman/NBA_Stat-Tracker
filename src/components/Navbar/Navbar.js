import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export const Navbar = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Link style={{ padding: 10, fontSize: 25 }} to="/games">
        Games
      </Link>
      <Link style={{ padding: 10, fontSize: 25 }} to="/players">
        Players
      </Link>
    </div>
  );
};
