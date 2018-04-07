export function fetchArtists() {
  console.log("in fetchArtists action")
  return (dispatch) => {
    dispatch({ type: 'LOADING_DATA' });
    return fetch('http://localhost:4000/artists')
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
    return fetch('http://localhost:4000/artists/'+artistId+'/artworks')
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTWORKS', artworks: res }))
      .then(() => dispatch({ type: 'DONE_LOADING_DATA'}))
      .catch(err => console.log(err))
  };
}
