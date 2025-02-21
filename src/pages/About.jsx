import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => (
  <div>
    <Helmet>
      <title>À Propos - Mon Boilerplate</title>
      <meta name="description" content="En savoir plus sur mon boilerplate React" />
    </Helmet>
    <h1>À Propos</h1>
    <p>Quelques informations sur le projet.</p>
  </div>
);

export default About;
