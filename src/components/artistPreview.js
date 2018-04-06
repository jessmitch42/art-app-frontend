import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as actions from '../actions/appActions';

class ArtistPreview extends Component {
  // this is a react component instead of a stateless functional component because the plugin "flip-move" that does the artists_container animation requires a react components as children
  render() {
    return (
      <div id={`artist-${this.props.artist.id}`} className="artist__container avoid-break">
        <Link
          to={`/artists/${this.props.artist.id}/artworks`}
          onClick={() => this.props.actions.setCurrentArtist(this.props.artist.id)}
        ><img className="artist-img" src={`http://localhost:4000/img/${this.props.artist.img}.png`} alt="Artist Artwork Example"/></Link>

        <div className="artist__name">{this.props.artist.first_name.toUpperCase()} {this.props.artist.last_name.toUpperCase()}</div>
      </div>
    );
  }
}

export default ArtistPreview;
