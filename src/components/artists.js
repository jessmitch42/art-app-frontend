import React from 'react';
import Artist from './artist'

const Artists = (props) => {
  console.log(props)
  return (
    <div className="artists-container">
      I am an artist container
      <Artist />
    </div>
  );
}

export default Artists;
