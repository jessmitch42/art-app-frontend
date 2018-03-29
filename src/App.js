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


class App extends Component {
  componentDidMount() {
    console.log(this.props)
    if (!this.props.artists.length) {
      this.props.actions.fetchArtists();
      console.log(this.props.artists)
    }
  }


  render() {
    return (
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Artists} />
        </Switch>
      </div>
    </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    artists: state.artists,
    artworks: state.artworks
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
