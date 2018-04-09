import React from 'react';
import ArtistPageHeader from './artistPageHeader';
import ArtistPageBio from './artistPageBio';

const ArtistCompleteInfo = (props) => {
  // TODO: add state persistance for artist info; the state clears if the page reloads currently, making the below conditions necessary
  // TODO: is there a better way to set var's than all these conditions? tbd
  
  const bio = props.artist.bio ? props.artist.bio : "";
  const sources = props.artist.sources ? `sources: ${props.artist.sources}` : "";
  const formattedName = props.artist.first_name ? `${props.artist.first_name.toUpperCase()} ${props.artist.last_name.toUpperCase()}` : "";

  const dates = setLifeDates(props.artist) ;

  function setLifeDates(artist) {
    if (!artist.birth_year) return;
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
