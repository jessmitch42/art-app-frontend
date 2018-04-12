export default function manageArtists(state = [], action) {
  switch (action.type) {

    case 'ADD_ARTISTS':
      return action.artists;
    default:
      return state;

  }
};
