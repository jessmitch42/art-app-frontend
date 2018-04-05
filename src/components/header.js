import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header className="App-header">
        <h1 className="App-title">CURA♀ED</h1>
        <NavLink
         exact
         to="/about"
       >about</NavLink>
       <NavLink
        exact
        to="/artists"
      >artists</NavLink>
      </header>
  );
}

export default Header;
