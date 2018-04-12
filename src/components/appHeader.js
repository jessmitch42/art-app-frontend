import React from 'react';
import { NavLink } from 'react-router-dom'

const AppHeader = () => {
  // TODO: make h1 a link

  return (
      <header className="App-header">

        <h1 className="App-title">CURA♀ED</h1>

        <NavLink
         exact to="/about">about</NavLink>

        <NavLink
          exact to="/artists">artists</NavLink>

      </header>
  );
}

export default AppHeader;
