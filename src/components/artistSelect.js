import React from 'react';

const ArtistSortingSelect = (props) => {
    return (
      <select
        className="artist-select"
        onChange={props.onChange.bind(this)}>

        <option selected>Sort Artists</option>
        <option value="ascending">A-Z</option>
        <option value="age">Youngest-Oldest</option>
        <option value="random">Random</option>

      </select>
    )
}

export default ArtistSortingSelect;
