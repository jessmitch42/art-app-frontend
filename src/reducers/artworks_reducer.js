const initialState = {
  artworks: [],
  loading: false
}

export default function manageArtworks(state = initialState, action) {
  switch (action.type) {

    case 'LOADING_ARTWORKS':
      return {
        ...state,
        loading: true
      }

    case 'ADD_ARTWORKS':
      return {
        ...state,
        artworks: action.artworks,
        loading: false
      }
    default:
      return state;

  }
};
