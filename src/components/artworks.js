import React, { Component } from 'react';


export default class Artworks extends Component {
  componentDidMount() {
    if (!this.props.artworks.length) {
      this.props.actions.fetchArtworks();
      // console.log(this.props.artists)
    }

  }

  render() {
    return (
      <div className="artists-container">
        I am here
      </div>
    );
  }
}
