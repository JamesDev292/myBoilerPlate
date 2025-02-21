import React from 'react';
import { useAtom } from 'jotai';
import { authAtom } from '../state/authAtom';
import { Button } from '@chakra-ui/react';

const Logout = () => {
  const [, setAuth] = useAtom(authAtom);

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };

  return (
    <Button onClick={handleLogout} colorScheme="red">
      Se déconnecter
    </Button>
  );
};

export default Logout;
