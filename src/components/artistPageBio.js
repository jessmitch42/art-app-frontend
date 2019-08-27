import React from "react";

const ArtistPageBio = ({ dates, bio, sources }) => (
  <section>
    <h3 className="artist-complete__dates">{dates}</h3>
    <h3 className="artist-complete__bio">{bio}</h3>
    <h3 className="artist-complete__sources">{sources}</h3>
  </section>
);

export default ArtistPageBio;
