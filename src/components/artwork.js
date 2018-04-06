import React, { Component } from 'react';

class Artwork extends Component {
  // this is a react component instead of a stateless functional component because the plugin "flip-move" that does the artists_container animation requires a react components as children
  render() {
    return (
      <div id={`artwork-${this.props.artwork.id}`} className="artwork__container">
        <img className="artwork-img" src={`http://localhost:4000/img/${this.props.artwork.img}.png`} alt={`${this.props.artwork.name} image`}/>

        <div className="artwork__name">{this.props.artwork.name}</div>
        <div className="artwork__year-completed">{this.props.artwork.year_completed}</div>
        <div className="artist__materials">{this.props.artwork.materials}</div>

      </div>
    )
  }
}

export default Artwork;
