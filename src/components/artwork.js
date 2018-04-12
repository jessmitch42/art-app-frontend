import React from 'react';

const Artwork = ({ img, name, year_completed, materials }) => {
  console.log(name)
  return (
    <div>
      <img
        className="artwork-img"
        src={`http://localhost:4000/img/${img}.png`}
        alt={`${name}`}/>

      <div className="artwork__name">{`${name} |  ${year_completed}`}</div>
      <div className="artist__materials">{materials}</div>
    </div>
  )
}

export default Artwork;
