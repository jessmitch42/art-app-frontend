export const setCurrentArtist = (id) => {
  return {
    type: 'SET_CURRENT_ARTIST',
    currentArtistId: id
  };
}

export const loading = () => {
  return {
    type: 'LOADING_DATA',
    loading: true
  };
}

export const stopLoading = () => {
  return {
    type: 'DONE_LOADING_DATA',
    loading: false
  };
}
