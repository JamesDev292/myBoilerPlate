import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { authAtom } from '../state/authAtom';
import { Button, Input, VStack, Heading } from '@chakra-ui/react';

const Login = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, tu pourrais appeler une API de connexion.
    // Pour cet exemple, on simule une authentification :
    if (username === 'user' && password === 'password') {
      setAuth({
        isAuthenticated: true,
        user: { name: username },
        token: 'dummy-token',
      });
    } else {
      alert('Identifiants invalides');
    }
  };

  return (
    <VStack spacing={4} p={4}>
      <Heading size="md">Connexion</Heading>
      <Input
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} colorScheme="teal">
        Se connecter
      </Button>
    </VStack>
  );
};

export default Login;
