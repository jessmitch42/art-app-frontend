import { combineReducers } from 'redux';
import artists from './artists_reducer';
import artworks from './artworks_reducer';
import global from './app_reducer';



const rootReducer = combineReducers({
  artists: artists,
  artworks: artworks,
  global: global
});

export default rootReducer;
