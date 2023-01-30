import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();

  function handleLogout() {
    logout({ logoutParams: { returnTo: `${window.location.origin}/login` } })
    sessionStorage.removeItem("a0.spajs.txs.iwXHXUalsZjOWyhvDJz6iWRgEDYbe6Zx")
  }

  return (
    <Button font sx={{ display: {md: 'flex'}, ml: 150 }} color="inherit" onClick={handleLogout}>
      <Typography fontWeight={800}>Log Out</Typography>
    </Button>
  );
};

export default LogoutButton;