import React from 'react';
import Artist from './artist'

const Artists = (props) => {
  console.log(props.artists)
  const artists = props.artists.length ? props.artists.map(a => <Artist artist={a}/>) : ""
  return (
    <div className="artists-container">
      I am an artist container
      {artists}
    </div>
  );
}

export default Artists;
