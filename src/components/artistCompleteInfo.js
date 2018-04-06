import React from 'react';

const ArtistCompleteInfo = (props) => {
  console.log(props)
  const bio = props.artist ? props.artist.bio : "";
  const sources = props.artist ? `sources: ${props.artist.sources}` : "";
  const formattedName = props.artist ? `${props.artist.first_name.toUpperCase()} ${props.artist.last_name.toUpperCase()}` : "";

  const artistsLifeDates = setLifeDates(props.artist) ;

  function setLifeDates(artist) {
    if (!artist) return;
    else if (!artist.death_year) {
      return `${artist.birth_year} | ${artist.nationality}`
    }
    else {
      return `${artist.birth_year} - ${artist.death_year} | ${artist.nationality}`
    }
  }

  return (
      <div className="artist-complete__container">
        <div className="artist-complete__name">{formattedName}</div>
        <div className="artist-complete__dates">{artistsLifeDates}</div>
        <div className="artist-complete__bio">{bio}</div>
        <div className="artist-complete__sources">{sources}</div>
      </div>
  );
}

export default ArtistCompleteInfo;
