import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/artists_actions.js'


import Header from './components/header'
import Artists from './components/artists'
import Artworks from './components/artworks'



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
          <Route exact path="/" render={()=><Artists artists={this.props.artists}/>} />
          <Route exact path="/artists" render={()=><Artists artists={this.props.artists}/>} />
          <Route path={`/artists/:artistId/artworks`} render={()=><Artworks />} />
        </Switch>
      </div>
    </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("in App mapStateToProps")
  return {
    artists: state.people.artists,
    artworks: state.objects.artworks
  };
};

function mapDispatchToProps(dispatch) {
  console.log("in App mapDispatchToProps")
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
