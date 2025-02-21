import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => (
  <div>
    <Helmet>
      <title>Accueil - Mon Boilerplate</title>
      <meta name="description" content="Page d'accueil de mon boilerplate React" />
    </Helmet>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil.</p>
  </div>
);

export default Home;
