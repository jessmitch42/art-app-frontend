import React from 'react';
import { NavLink } from 'react-router-dom'

const AppHeader = () => {
  // TODO: make h1 a link

  return (
      <header className="App-header">

        <h1 className="App-title">CURA♀ED</h1>

        <div className="nav-container">
          <NavLink
          exact to="/about">about</NavLink>

          <NavLink
            exact to="/artists">artists</NavLink>
        </div>

      </header>
  );
}

export default AppHeader;
