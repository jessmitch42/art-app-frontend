import React, { Component } from 'react';
// import Artwork from './artwork'

class Artworks extends Component {
  componentDidMount() {
    console.log("in Artowrk componentDidMount")
    console.log(this.props.match.params)
  }

  render() {
    return (
      <div className="artwork__container">
          Im an artwork
      </div>
    )
  }
}
export default Artworks;
