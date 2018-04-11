const BASE_URL = 'http://localhost:4000';

export function fetchArtists() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_DATA' }); //not current using this in components
    return fetch(`${BASE_URL}/artists`)
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTISTS', artists: res }))
      .then(() => dispatch({ type: 'DONE_FETCHING_DATA'}))
      .catch(err => console.log(err))
  };
}

export function fetchArtworks(artistId) {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_DATA' });
    return fetch(`${BASE_URL}/artists/${artistId}/artworks`)
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTWORKS', artworks: res }))
      .then(() => dispatch({ type: 'DONE_FETCHING_DATA'}))
      .catch(err => console.log(err))
  };
}
