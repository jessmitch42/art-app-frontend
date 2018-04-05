import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/artists_actions'
import * as globalActions from './actions/app_actions'


import Header from './components/header'
import ArtistsContainer from './views/artists_container'
import ArtworksContainer from './views/artworks_container'
import About from './components/about'




class App extends Component {
  componentDidMount() {
    console.log("in App componentDidMount")
    if (!this.props.artists.length) {
      this.props.actions.fetchArtists();
      console.log("in if statement for fetchArtists (App)")
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={()=><ArtistsContainer artists={this.props.artists} />} />
            
            <Route exact path="/about" component={About} />

            <Route exact path="/artists" render={()=>
              <ArtistsContainer
              artists={this.props.artists}
              setId={this.props.globalActions}/>} />

            <Route path={`/artists/:artistId/artworks`} render={()=><ArtworksContainer artworks={this.props.artworks} artistId={this.props.currentArtistId}/>} />

          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("in App mapStateToProps")
  return {
    artists: state.artists,
    artworks: [],
    loading: false,
    currentArtistId: null
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
