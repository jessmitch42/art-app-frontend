import React from 'react';
import ArtistPageHeader from './artistPageHeader';
import ArtistPageBio from './artistPageBio';

const ArtistCompleteInfo = (props) => {
  // TODO: add state persistance for artist info; the state clears if the page reloads currently, making the below conditions necessary
  console.log(props)
  const bio = props.artist ? props.artist.bio : "";
  const sources = props.artist ? `sources: ${props.artist.sources}` : "";
  const formattedName = props.artist ? `${props.artist.first_name.toUpperCase()} ${props.artist.last_name.toUpperCase()}` : "";

  const dates = setLifeDates(props.artist) ;

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
        <ArtistPageHeader name={formattedName}/>
        <ArtistPageBio dates={dates} bio={bio} sources={sources}/>
      </div>
  );
}

export default ArtistCompleteInfo;
