import React from 'react';
import { Link } from "react-router-dom";

const Artist = (props) => {
  console.log("ARTISTS HEREEE")
  return (
    <div id={`artist-${props.artist.id}`} className="artist__container">
      <Link to={`/artists/${props.artist.id}/artworks`}><img className="artist-img" src={`http://localhost:4000/img/${props.artist.img}.png`} alt="Artist Artwork Example"/></Link>
      <div className="artist__name">{props.artist.first_name} {props.artist.last_name}</div>
    </div>
  );
}

export default Artist;
