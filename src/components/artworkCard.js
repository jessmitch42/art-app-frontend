import React from 'react';

const ArtworkCard = ({ img, name, year_completed, materials }) => {
  return (
    <div>
      <img
        className="artwork-img"
        src={`https://curated-api.herokuapp.com/${img}.png`}
        alt={`${name}`}/>

      <div className="artwork__name">{`${name} |  ${year_completed}`}</div>
      <div className="artist__materials">{materials}</div>
    </div>
  )
}



export default ArtworkCard;
