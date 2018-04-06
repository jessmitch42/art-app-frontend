import React from 'react';
import Artist from '../components/artist';
import FlipMove from 'react-flip-move';

const ArtistsContainer = (props) => {
  console.log("in Artists")
  console.log(props)
  let artists = !props.loading ? props.artists.map(a => <Artist key={a.id} artist={a} actions={props.globalActions}/>) : "";

  return (
    <div className="artists-container">
      <FlipMove staggerDelayBy={100}>
        {artists}
      </FlipMove>
    </div>
  );
}

export default ArtistsContainer;
