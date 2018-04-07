import React, { Component } from 'react';

class Artwork extends Component {
  // this is a react component instead of a stateless functional component because the plugin "flip-move" that does the artists_container animation requires a react components as children
  render() {
    const { id, img, name, year_completed, materials } = this.props.artwork;
    return (
      <div id={`artwork-${id}`} className="artwork__container avoid-break">
      
        <img className="artwork-img" src={`http://localhost:4000/img/${img}.png`} alt={`${name}`}/>

        <div className="artwork__name">{`${name} |  ${year_completed}`}</div>
        <div className="artist__materials">{materials}</div>

      </div>
    )
  }
}

export default Artwork;
