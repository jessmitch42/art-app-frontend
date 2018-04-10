export default function manageGlobalState(state = { loading: false }, action) {
  switch (action.type) {

    case 'FETCHING_DATA':
      return { loading: true };

    case 'DONE_FETCHING_DATA':
      return { loading: false };

    default:
      return state;

  }
};
