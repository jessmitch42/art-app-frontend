export function fetchArtists() {
  console.log("in fetchArtists action")
  return (dispatch) => {
    dispatch({ type: 'LOADING_ARTISTS' });
    return fetch('http://localhost:4000/artists')
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTISTS', artists: res }));
  };
}
