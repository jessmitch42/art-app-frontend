import React, { Component } from 'react';
import './App.css';
import './App-responsive.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';


import Header from './components/header';
import AllArtistsContainer from './views/allArtistsContainer';
import About from './components/about';
import Artworks from './views/showArtworksContainer';

import NoMatch from './components/noMatch';



class App extends Component {
  componentDidMount() {
    console.log("in App componentDidMount")
    if (!this.props.artistsList.length) {
      this.props.actions.fetchArtists();
    }
  }

  render() {

    return (
      <Router>
        <div>
          <Header />
          <Switch>

            <Route
              exact path="/"
              render={ () =><AllArtistsContainer {...this.props} />}
                />

            <Route
              exact path="/about"
              component={About}
              />

            <Route
              exact path="/artists"
              render={ () => <AllArtistsContainer{...this.props}/>}
              />


            <Route path={`/artists/:artistId/artworks`} render={
                (routeProps) => <Artworks {...routeProps} {...this.props} />
              }
              />

            <Route
              component={NoMatch}
              />

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
    loading: state.global.loading
  };
};

function mapDispatchToProps(dispatch) {
  console.log("in App mapDispatchToProps")
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}


export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
