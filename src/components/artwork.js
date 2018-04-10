import React from 'react';

const Artwork = (props) => {
  return (
    <div>
      <img
        className="artwork-img"
        src={`http://localhost:4000/img/${props.img}.png`}
        alt={`${props.name}`}/>

      <div className="artwork__name">{`${props.name} |  ${props.year_completed}`}</div>
      <div className="artist__materials">{props.materials}</div>
    </div>
  )
}

export default Artwork;
