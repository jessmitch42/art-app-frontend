const BASE_URL = 'http://localhost:4000';

export function fetchArtists() {
  console.log("in fetchArtists action")
  return (dispatch) => {
    dispatch({ type: 'LOADING_DATA' }); //not current using this in components
    return fetch(`${BASE_URL}/artists`)
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTISTS', artists: res }))
      .then(() => dispatch({ type: 'DONE_LOADING_DATA'}))
      .catch(err => console.log(err))
  };
}

export function fetchArtworks(artistId) {
  console.log("in fetchArtworks action")
  return (dispatch) => {
    dispatch({ type: 'LOADING_DATA' });
    return fetch(`${BASE_URL}/artists/${artistId}/artworks`)
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTWORKS', artworks: res }))
      .then(() => dispatch({ type: 'DONE_LOADING_DATA'}))
      .catch(err => console.log(err))
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
