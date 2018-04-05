import React, { Component } from 'react';
// import Artwork from './artwork'


export default class Artworks extends Component {
  componentDidMount() {
    // request artworks by this artists if they aren't already available
    console.log("in Artworks componentDidMount")
    console.log(this.location)
    // if (!this.props.artists.length) {
    //   this.props.actions.fetchArtworks();
    //   console.log("in if statement for fetchArtists (App)")
    // }
  }

  render() {
    return (
      <div className="artists-container">
        I am here
      </div>
    );
  }
}

// const Artworks = (props) => {
//
//   return (
//     <div className="artists-container">
//       {artists}
//     </div>
//   );
// }
//
// export default Artworks;
