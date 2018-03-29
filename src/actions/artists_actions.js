export function fetchArtists() {
  console.log("here!!!")
  return (dispatch) => {
    dispatch({ type: 'LOADING_ARTISTS' });
    return fetch('http://localhost:4000/artists')
      .then(response => response.json())
      .then(res => console.log(res));
  };
}
