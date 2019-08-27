import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
      <header className="App-header">

        <h1 className="App-title">CURA♀ED</h1>

        <div className="nav-container">
          <NavLink exact to="/artists">artists</NavLink>
          <NavLink exact to="/about">about</NavLink>
        </div>

      </header>
  );
}

export default AppHeader;
