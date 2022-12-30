import { Box } from "@mui/material";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListPage from "./Product/pages/ListPage";

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <Box paddingTop='10px'>
      <Switch>
        <Route exact path={match.url}>
          <ListPage />
        </Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
