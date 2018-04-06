import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/artActions';
import * as globalActions from './actions/appActions';


import Header from './components/header';
import ArtistsContainer from './views/artists_container';
import { ConnectedArtworksContainer } from './views/artworks_container';
import About from './components/about';




class App extends Component {
  componentDidMount() {
    console.log("in App componentDidMount")
    if (!this.props.artistsList.length) {
      this.props.actions.fetchArtists();
    }
    // this.props.actions.fetchArtworks(1);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <div className="wrapper">
              <Route exact path="/" render={()=><ArtistsContainer artists={this.props.artistsList} />} />

              <Route exact path="/about" component={About} />

              <Route exact path="/artists" render={()=>
                <ArtistsContainer
                artists={this.props.artistsList}
                globalActions={this.props.globalActions}/>} />

              <Route path={`/artists/:artistId/artworks`} render={()=><ConnectedArtworksContainer currentArtistArtwork={this.props.currentArtistArtwork} artistId={this.props.currentArtistId}/>} />
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("in App mapStateToProps")
  return {
    artistsList: state.artists,
    currentArtistArtwork: state.artworks,
    loading: state.global.loading,
    currentArtistId: state.global.currentArtistId
  };
};

function mapDispatchToProps(dispatch) {
  console.log("in App mapDispatchToProps")
  return {
    actions: bindActionCreators(actions, dispatch),
    globalActions: bindActionCreators(globalActions, dispatch)
  };
}


export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
