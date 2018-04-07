import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as actions from '../actions/actions';

class ArtistPreview extends Component {
  // this is a react component instead of a stateless functional component because the plugin "flip-move" that does the artists_container animation requires a react components as children
  render() {
    const { id, img, first_name, last_name } = this.props.artist;

    return (
      <div id={`artist-${id}`} className="artist__container avoid-break">
        <Link
          to={`/artists/${id}/artworks`}
          onClick={() => this.props.actions.setCurrentArtist(id)}
        ><img className="artist-img" src={`http://localhost:4000/img/${img}.png`} alt="Artist Artwork Example"/></Link>

        <div className="artist__name">{first_name.toUpperCase()} {last_name.toUpperCase()}</div>
      </div>
    );
  }
}

export default ArtistPreview;
