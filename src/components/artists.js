import React from 'react';
import Artist from './artist'

const Artists = (props) => {
  console.log(props.artists.loading)
  let artists = !props.artists.loading ? props.artists.map(a => <Artist artist={a}/>) : "";
  console.log(artists)
  return (
    <div className="artists-container">
      {artists}
    </div>
  );
}

export default Artists;
