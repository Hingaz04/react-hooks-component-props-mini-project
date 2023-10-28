import React from 'react';

function About(props) {
  return (
    <aside>
      <img src={props.logoImage || 'https://via.placeholder.com/215'} alt="blog logo" />
      <p>{props.aboutText}</p>
    </aside>
  );
}

export default About;