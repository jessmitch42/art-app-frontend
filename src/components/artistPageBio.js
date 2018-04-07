import React from "react";

const ArtistPageBio = (props) => (
  <div>
    <div className="artist-complete__dates">{props.dates}</div>
    <div className="artist-complete__bio">{props.bio}</div>
    <div className="artist-complete__sources">{props.sources}</div>
  </div>
);

export default ArtistPageBio;
