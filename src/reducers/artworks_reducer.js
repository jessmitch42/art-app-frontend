export default function manageArtworks(state = [], action) {
  switch (action.type) {

    case 'ADD_ARTWORKS':
      return action.artworks;

    default:
      return state;

  }
};
