import React from 'react';
import Artist from './artist'

const Artists = (props) => {
  console.log(props.artists.loading)
  let artists;
  if (!props.artists.loading) {
    console.log("HEREEEKLJSFKLJSF")
    artists = props.artists.map(a => <Artist artist={a}/>)
  }
  else {
    artists = ""
  }
  console.log(artists)
  return (
    <div className="artists-container">
      {artists}
    </div>
  );
}

export default Artists;
