import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ArtistPageHeader from './artistPageHeader';

class ArtistCard extends Component {
  /* this is a react component instead of a stateless 
  functional component because the plugin "flip-move" 
  that is used in allArtistsContainer requires a react 
  components as children to properly animate */
  state = {
    hover: false
  }

  handleHover = () => {this.setState({ hover: true })}
  removeHover = () => {this.setState({ hover: false })}


  render() {
    const { id, img, first_name, last_name } = this.props.artist;
    const formattedName = `${first_name} ${last_name}`.toUpperCase();

    return (
      <div
        id={`artist-${id}`}
        className="artist__container avoid-break">

        <Link
          onMouseOver={this.handleHover}
          onMouseOut={this.removeHover}
          to={`/artists/${id}/artworks`}
          className="content">
            <h3 
              className="content-details fadeIn-left">{first_name} {last_name}</h3>

            <img
              className="artist-img"
              src={`https://curated-api.herokuapp.com/img/${img}.png`}
              alt="Artist Artwork Example"/>
        </Link>

      </div>
    );
  }
}

export default ArtistCard;
