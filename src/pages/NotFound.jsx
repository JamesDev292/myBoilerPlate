import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <div>
    <Helmet>
      <title>Page Introuvable</title>
    </Helmet>
    <h1>404 - Page Introuvable</h1>
    <p>Désolé, la page que vous recherchez n'existe pas.</p>
  </div>
);

export default NotFound;
