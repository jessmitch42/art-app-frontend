export function fetchArtists() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ARTISTS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTISTS', artists: res }));
  };
}
