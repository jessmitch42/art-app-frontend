export function fetchArtworks() {
  console.log("in fetchArtworks action")
  return (dispatch) => {
    dispatch({ type: 'LOADING_ARTWORKS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_ARTWORKS', artworks: res }));
  };
}
