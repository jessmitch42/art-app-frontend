import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/header'
import Artists from './components/artists'


class App extends Component {
  componentDidMount() {
    // if (!this.props.artists.length) {
    //   this.props.actions.fetchArtists();
    // }
  }


  render() {
    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/" component={Artists} />
      </div>
    </Router>
    )
  }
}

export default App;
