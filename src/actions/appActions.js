export function setCurrentArtist(id) {
  return {
    type: 'SET_CURRENT_ARTIST',
    currentArtistId: id
  };
}

export function loading() {
  return {
    type: 'LOADING_DATA',
    loading: true
  };
}

export function stopLoading() {
  return {
    type: 'DONE_LOADING_DATA',
    loading: false
  };
}
