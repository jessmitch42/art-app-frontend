const initialState = {
  artworks: [],
  loading: false
}

export default function manageArtworks(state = initialState, action) {
  switch (action.type) {

    case 'LOADING_ARTWORKS':
      return state.artworks;

    case 'ADD_ARTWORKS':

      return state;

    default:
      return state;

  }
};
