import { combineReducers } from 'redux';
import artists from './artists_reducer';
import artworks from './artists_reducer';


const rootReducer = combineReducers({
  artists: artists,
  artworks: artworks
});

export default rootReducer;
