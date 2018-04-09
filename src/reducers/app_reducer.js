export default function manageGlobalState(state = {loading: false, currentArtistId: false}, action) {
  switch (action.type) {

    case 'LOADING_DATA':
      return {
        ...state,
        loading: true
      };
    case 'STOP_LOADING_DATA':
      return {
        ...state,
        loading: false
      };

    default:
      return state;

  }
};
