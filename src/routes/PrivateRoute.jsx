import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // Remplacer par ta logique d'authentification

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
