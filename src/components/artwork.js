import React from 'react';

const Artwork = (props) => {
  return (
    <div id={`artwork-${props.artwork.id}`} className="artist__container">
      <img className="artist-img" src={`http://localhost:4000/img/${props.artwork.img}.png`} alt={`${props.artwork.name} image`}/>

      <div className="artist__name">{props.artwork.name}</div>
      <div className="artist__name">{props.artwork.year_completed}</div>
      <div className="artist__name">{props.artwork.materials}</div>

    </div>
  );
}

export default Artwork;
