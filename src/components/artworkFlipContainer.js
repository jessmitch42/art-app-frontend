import React, { Component } from 'react';
import ArtworkCard from './artworkCard'


class ArtworkFlipContainer extends Component {
  /* this is a react component instead of a stateless 
  functional component because the plugin "flip-move" 
  requires react components as children to properly 
  animate. */

  render() {
    const { id, img, name, year_completed, materials } = this.props.artwork;
    return (
      <div
        id={`artwork-${id}`}
        className="artwork__container avoid-break">

        <ArtworkCard img={img} name={name} year_completed={year_completed} materials={materials}/>

      </div>
    )
  }
}


export default ArtworkFlipContainer;
