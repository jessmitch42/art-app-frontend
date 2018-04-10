import React from "react";

const ArtistPageBio = ({ dates, bio, sources }) => (
  <div>
    <div className="artist-complete__dates">{dates}</div>
    <div className="artist-complete__bio">{bio}</div>
    <div className="artist-complete__sources">{sources}</div>
  </div>
);

export default ArtistPageBio;
