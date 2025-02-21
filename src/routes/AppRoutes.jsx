import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />

      <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
