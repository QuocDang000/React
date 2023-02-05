import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import useStyles from './LandingPageStyle.ts';

function LandingPage() {
  const { loginWithRedirect } = useAuth0();
  const { classes } = useStyles()

  return (
    <>
      <div className={classes.wrapper}>
        <Grid className={classes.wrapperColumn} container spacing={2}>
          <Grid className={classes.columnLeft} item xs={6}>
            <Box className={classes.wrapper_content}>
              <div className={classes.introduce}>
                <div className={classes.title}>
                  <h2>Sign in to BaoQuoc's store</h2>
                  <h3>Lorem Ipsum is sipmly</h3>
                </div>
                <div className={classes.content}>
                  <p>If you don't have an account register</p>
                  <p>
                    You can Register here!
                  </p>
                </div>
                    <Button variant='contained' onClick={() => loginWithRedirect()}>Register</Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <img src='data:image/png;base64,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'></img>
            </Box>
          </Grid>
        </Grid>
      </div>

    </>
  );
}

export default LandingPage;