export function fetchArtists() {
  console.log("in fetchArtists action")
  return (dispatch) => {
    dispatch({ type: 'LOADING_DATA' });
    return fetch('http://localhost:4000/artists')
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTISTS', artists: res }))
      .then(res => dispatch({ type: 'STOP_LOADING_DATA'}))
  };
}

export function fetchArtworks(artistId) {
  console.log("in fetchArtworks action")
  console.log(artistId)
  return (dispatch) => {
    dispatch({ type: 'LOADING_DATA' });
    return fetch(`http://localhost:4000/artists/${artistId}/artworks`)
    .then(res => dispatch({ type: 'ADD_ARTWORKS', artworks: res }))
    .then(res => dispatch({ type: 'STOP_LOADING_DATA'}))
  };
}
// dispatch({ type: 'ADD_ARTWORKS', artworks: res })
