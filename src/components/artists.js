import React from 'react';
import Artist from './artist'

const Artists = (props) => {
  console.log("in Artists")
  let artists = !props.artists.loading ? props.artists.map(a => <Artist artist={a}/>) : "";

  return (
    <div className="artists-container">
      {artists}
    </div>
  );
}

export default Artists;
