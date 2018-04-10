import React from 'react';
import ArtistPageHeader from './artistPageHeader';
import ArtistPageBio from './artistPageBio';

const ArtistCompleteInfo = (props) => {
  const { bio, sources, first_name, last_name, birth_year, nationality } = props.artist;
  const dates = !props.artist.death_year ? birth_year : `${birth_year} - ${props.artist.death_year}`;

  const formattedSources = `sources: ${sources}`;
  const formattedName = `${first_name} ${last_name}`.toUpperCase();
  const datesWithNationality = `${dates} | ${nationality}`;

  return (
      <div className="artist-complete__container">
        <ArtistPageHeader name={formattedName}/>
        <ArtistPageBio dates={datesWithNationality} bio={bio} sources={formattedSources}/>
      </div>
  );
}

export default ArtistCompleteInfo;
