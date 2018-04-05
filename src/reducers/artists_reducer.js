const initialState = {
  artists: [],
  loading: false
}

export default function manageArtists(state = initialState, action) {
  switch (action.type) {

    case 'LOADING_ARTISTS':

      return {
        ...state,
        loading: true
      }

    case 'ADD_ARTISTS':
      return {
        ...state,
        artists: action.artists,
        loading: false
      }

    default:
      return state;

  }
};
