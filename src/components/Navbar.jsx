import React from 'react';
import { Button } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {

  return (
    <nav className='navbarStyle'>
      
      <Button variant="ghost" size="sm" as={RouterLink} to="/" colorScheme="teal">Home</Button>
      <Button variant="ghost" size="sm" as={RouterLink} to="/about" colorScheme="teal">About</Button>
      <Button variant="ghost" size="sm" as={RouterLink} to="/dashboard" colorScheme="teal">Dashboard</Button>
      <Button variant="ghost" size="sm">Click me</Button>

    </nav>
  );
};

export default Navbar;
