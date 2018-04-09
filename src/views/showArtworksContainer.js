import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FlipMove from 'react-flip-move';

import ArtworkFlipContainer from '../components/artworkFlipContainer'
import ArtistCompleteInfo from '../components/artistCompleteInfo';


const Artworks = (appProps) => {

  console.log(appProps)
  // const currentArtistArtworks = this.props.currentArtistArtwork.map(a => <ArtworkFlipContainer artwork={a} key={a.id}/>);
  // <FlipMove
  //   staggerDelayBy={100}>
  //   {currentArtistArtworks}
  // </FlipMove>

  const filterArtists = appProps.props.artistsList.filter(a => a.id == appProps.routeProps.match.params.artistId);
  const currentArtist = filterArtists[0] ? filterArtists[0] : {};
  return (
      <div className="artwork-container wrapper">

      <ArtistCompleteInfo artist={currentArtist}/>




      </div>

  )
};

export default Artworks;
// class ShowArtworksContainer extends Component {
//   componentDidMount() {
//     console.log("in Artowrk componentDidMount")
//
//     this.props.actions.fetchArtworks(this.props.artistId);
//   }
//
//   render() {
//     const currentArtistArtworks = this.props.currentArtistArtwork.map(a => <ArtworkFlipContainer artwork={a} key={a.id}/>);
//     return (
//         <div className="artwork-container wrapper">
//
//           <ArtistCompleteInfo artist={this.props.currentArtist}/>
//
//           <FlipMove
//             staggerDelayBy={100}>
//             {currentArtistArtworks}
//           </FlipMove>
//
//         </div>
//
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   console.log("in App mapStateToProps")
//   return {
//     currentArtistArtwork: state.artworks,
//     currentArtist: findCurrentArtistInState(state)
//   };
// };
//
// function findCurrentArtistInState(state) {
//   return state.artists.filter(a => a.id === state.global.currentArtistId)[0]
// }
//
// function mapDispatchToProps(dispatch) {
//   console.log("in App mapDispatchToProps")
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }
//
//
// export const ConnectedShowArtworksContainer = connect(mapStateToProps, mapDispatchToProps)(ShowArtworksContainer);
