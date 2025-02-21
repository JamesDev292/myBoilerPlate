import React from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => (
  <div>
    <Helmet>
      <title>Dashboard - Mon Boilerplate</title>
    </Helmet>
    <h1>Dashboard</h1>
    <p>Contenu réservé aux utilisateurs authentifiés.</p>
  </div>
);

export default Dashboard;
