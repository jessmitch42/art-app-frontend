import React from 'react';

const ArtworkCard = ({ img, name, year_completed, materials }) => {
  return (
    <figure>
      <img
        className="artwork-img"
        src={`https://curated-api.herokuapp.com/img/${img}.png`}
        alt={`${name}`}/>

      <figcaption>
        <h4 className="artwork__name">{`${name} |  ${year_completed}`}</h4>
        <h4 className="artist__materials">{materials}</h4>
      </figcaption>
    </figure>
  )
}



export default ArtworkCard;
