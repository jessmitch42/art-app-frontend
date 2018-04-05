export function fetchArtworks(artistId) {
  console.log("in fetchArtworks action")
  return (dispatch) => {
    dispatch({ type: 'LOADING_DATA' });
    return fetch(`http://localhost:4000/artists/${artistId}/artworks`)
      .then(response => response.json())
      .then(res => console.log(res));
  };
}
// dispatch({ type: 'ADD_ARTWORKS', artworks: res })
