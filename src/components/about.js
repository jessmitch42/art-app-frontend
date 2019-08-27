import React from 'react';

const About = () => {

  return (
    <main className="about-container wrapper">
      <p>Hi, I'm Jess. I created this app as a personal project while completing Flatiron's full-stack bootcamp as an example of a simple React/Rails app that uses Redux.</p>
      <hr/>

      <p>CURA♀ED is a personally-curated list of womxn artists from the past 100-odd years. Its purpose is to expose people to some artists they may not have heard of before as a reminder that there, and have always been, lots of amazing, talented artists other than the the Pollacks, Picassos, Dalis, and Da Vincis of the world.</p>

      <p>I was inspired to create this app after attending the exhibit "Her Paris: Women Artists in the Age of Impression" at the Denver Art Museum. There I learned how excluded women were in the 19th and early 20th centuries not only from Parisian art schools, but also socially from activities such as painting professionally or in public.</p>

      <hr/>

      <p>All artist information and images are taken from <a href="https://www.artsy.net/">Artsy</a>. Artist biographies are taken from <a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia</a> and sourced on page.</p>

      <p>This is a first iteration of a larger idea that will hopefully grow to be more interactive for users.</p>
    </main>
  );
}

export default About;
