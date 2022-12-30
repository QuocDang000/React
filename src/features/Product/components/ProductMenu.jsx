import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import {
  NavLink,
  useRouteMatch,
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import useStyles from "./ProductMenuStyle.ts";

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const { classes } = useStyles();
  const { url } = useRouteMatch();

  return (
    <Router>
      <Box className={classes.menu} component='ul'>
        <li>
          {/* <Link component={NavLink} to={`${url}`} exact>
            Description
          </Link> */}
          <Link to={`${url}/netflix`}>Netflix</Link>
        </li>
        <li>
          {/* <Link component={NavLink} to={`${url}/additional`} exact>
            Additional Infomation
          </Link> */}
          <Link to={`${url}/zillow-group`}>Zillow Group</Link>
        </li>
        <li>
          {/* <Link component={NavLink} to={`${url}/reviews`} exact>
            Reviews
          </Link> */}
          <Link to={`${url}/yahoo`}>Yahoo</Link>
        </li>

        <Switch>
          <Route path='/:id' children={<Child />} />
        </Switch>
      </Box>
    </Router>
  );
}

export default ProductMenu;

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let params = useParams();
  console.log("params", params);

  return <div>{/* <h3>ID: {id}</h3> */}</div>;
}
