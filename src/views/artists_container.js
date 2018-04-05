import React from 'react';
import Artist from '../components/artist'

const ArtistsContainer = (props) => {
  console.log("in Artists")
  console.log(props)
  let artists = !props.artists.loading ? props.artists.map(a => <Artist key={a.id} artist={a} setId={props.setId}/>) : "";

  return (
    <div className="artists-container">
      {artists}
    </div>
  );
}

export default ArtistsContainer;
