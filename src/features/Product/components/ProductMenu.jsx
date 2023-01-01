import React from "react";
import PropTypes from "prop-types";
import { Box, Link } from "@mui/material";
import { NavLink, useRouteMatch, BrowserRouter as Router } from "react-router-dom";
import useStyles from "./ProductMenuStyle.ts";

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const { classes } = useStyles();
  const { url } = useRouteMatch();

  return (
    <Router>
      <Box component='ul' className={classes.menu}>
        <li>
          <Link component={NavLink} to={`${url}`} exact>
            Description
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${url}/additional`} exact>
            Additional Infomation
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${url}/reviews`} exact>
            Reviews
          </Link>
        </li>
      </Box>
    </Router>
  );
}

export default ProductMenu;
