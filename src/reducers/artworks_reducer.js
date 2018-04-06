export default function manageArtworks(state = [], action) {
  switch (action.type) {

    case 'ADD_ARTWORKS':
    console.log(action.artworks)
      return action.artworks;

    default:
      return state;

  }
};
