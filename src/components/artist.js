import React from 'react';

const Artist = (props) => {
  console.log("ARTISTS HEREEE")
  console.log(props)
  return (
    <div id={"artist-"+props.artist.id} className="artist__container">
      <img className="artist-img" src={`http://localhost:4000/img/${props.artist.img}.png`} alt="I'm a picture"/>
      <div className="artist__name">{props.artist.first_name} {props.artist.last_name}</div>
    </div>
  );
}

export default Artist;
