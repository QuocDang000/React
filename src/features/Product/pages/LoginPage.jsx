import React from 'react';
import { Box, Button } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box>
      Login Page
      <Button variant='contained'  onClick={() => loginWithRedirect()}>Log In</Button>
    </Box>
  );
}

export default LoginPage;