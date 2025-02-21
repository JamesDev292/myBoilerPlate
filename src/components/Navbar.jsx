import React, { useState } from 'react';
import { Button, IconButton, Input, Box } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';
import { LuSearch } from "react-icons/lu"
import './Navbar.css'


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <nav className='navbarStyle'>
      <div className='containerNavbarRight'>
        <Button variant="ghost" size="sm" as={RouterLink} to="/" colorScheme="teal">Home</Button>
        <Button variant="ghost" size="sm" as={RouterLink} to="/about" colorScheme="teal">About</Button>
        <Button variant="ghost" size="sm" as={RouterLink} to="/dashboard" colorScheme="teal">Dashboard</Button>
        <Button variant="ghost" size="sm">Click me</Button>
      </div>

      <div className='containerNavbarLeft' >
          
          <Box
            overflow="hidden"
            transition="max-width 0.3s ease"
            maxW={showSearch ? '200px' : '0px'}
          >
            <Input
              placeholder="Rechercher..."
              size="sm"
              borderRadius="md"
              variant="outline"
            />
          </Box>

        <IconButton aria-label="Search database" variant="ghost" size="sm" onClick={handleSearchToggle}>
          <LuSearch />
        </IconButton>



      </div>
    </nav>
  );
};

export default Navbar;
