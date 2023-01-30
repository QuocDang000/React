import { Box } from "@mui/material";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "../components/Layout/Header";
import DetailPage from "./Product/pages/DetailPage";
import ListPage from "./Product/pages/ListPage";

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <>
      <Header />
      <Box paddingTop='10px'>
        <Switch>
          <Route exact path={match.url}>
            <ListPage />
          </Route>
          <Route exact path={`${match.url}/:productId`}>
            <DetailPage />
          </Route>
        </Switch>
      </Box>
    </>

  );
}

export default ProductFeature;
