import { combineReducers } from 'redux';
import artists_reducer from './artists_reducer';
import artworks_reducer from './artists_reducer';


const rootReducer = combineReducers({
  artists_reducer,
  artworks_reducer
});

export default rootReducer;
