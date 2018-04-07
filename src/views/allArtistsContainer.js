import React, { Component } from 'react';
import ArtistPreview from '../components/artistPreview';
// import ArtistSelect from '../components/artistSelect';

import FlipMove from 'react-flip-move';

class AllArtistsContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ''
  //   };
  //   this.handleSelection = this.handleSelection.bind(this);
  // }
  //
  // handleSelection = () => {
  //   console.log("handleselection")
  //   if (this.state.value) {
  //     console.log(this.state.value)
  //   }
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="artists-container wrapper">

        <select className="artist-select">
          <option selected>Sort Artists</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
          <option value="random">Random</option>
        </select>

          <FlipMove
            staggerDelayBy={130}>
            {this.props.artists.map(a => <ArtistPreview key={a.id} artist={a} actions={this.props.globalActions}/>)}
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default AllArtistsContainer;
