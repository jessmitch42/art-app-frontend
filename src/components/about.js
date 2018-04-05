import React from 'react';

const About = (props) => {

  return (
    <div className="about-container">
      <p>CURA♀ED is a curated list of womxn artists from the past 100-odd years. Its purpose is to expose people to some artists they may not have heard of before as a reminder that there, and have always been, lots of amazing, talented artists other than the the Pollacks, Picassos, Dalis, and Da Vincis of the world.</p>

      <p>I was inspired to create this app after attend the exhibit "Her Paris: Women Artists in the Age of Impression" at the Denver Art Museum. There I learned how excluded women were in the 19th and early 20th centuries not only from Parisian art schools, but also socially from activities such as painting professionally or in public.</p>

      <hr/>

      <p>From <a href="https://www.artsy.net/gene/women-artists">Artsy</a>: <span className="about-page__quote">Women artists have been the subject of varying degrees of critical attention and neglect throughout history; as recently as the mid-20th century they have been the subject of outright derision in and exclusion from seminal art historical texts... Women have continued the struggle for recognition in modern and contemporary art spheres, to such an extent that feminist collective Guerilla Girls asked in 1989, “Do women have to be naked to get into the Met[ropolitan] Museum?” </span>
      </p>

      <p>All artist information and images are taken from <a href="https://www.artsy.net/">Artsy</a>. Artist biographies are taken from <a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia</a> and sourced on page.</p>
    </div>
  );
}

export default About;
