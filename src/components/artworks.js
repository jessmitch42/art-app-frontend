import React, { Component } from 'react';


export default class Artworks extends Component {
  componentDidMount() {
    // request artworks by this artists if they aren't already available
    console.log("in Artworks componentDidMount")
    console.log(this.props.pathname)
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
