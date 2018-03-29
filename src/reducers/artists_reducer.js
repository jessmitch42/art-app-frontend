const initialState = {
  artists: [],
  loading: false
}

export default function manageArtists(state = initialState, action) {
  switch (action.type) {

    case 'LOADING_ARTISTS':

      return Object.assign({}, state, {
        loading: true
      })

    case 'ADD_ARTISTS':
    console.log(action)
      return Object.assign({}, state, {
        artists: action.artists,
        loading: false
      })

    default:
      return state;

  }
};
