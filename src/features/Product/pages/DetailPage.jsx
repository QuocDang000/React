import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import useStyles from "./DetailPageStyle.ts";
import ProductThumbnail from "../components/ProductThumbnail";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";
import ProductDetailSkeleton from "../components/ProductDetailSkeleton";
import ProductInfo from "../components/ProductInfo";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";
import ProductDescription from "../components/ProductDescription";
import ProductAdditional from "../components/ProductAdditional";
import ProductReviews from "../components/ProductReviews";

function DetailPage() {
  const { classes } = useStyles();
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { productDetail, loading } = useProductDetail(productId);
  console.log("productDetail", productDetail);

  const handleAddToCartSubmit = (formValues) => {
    console.log("formValues", formValues);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper>
          <Grid container>
            <Grid item className={classes.left}>
              {loading ? (
                <ProductThumbnail product={productDetail} />
              ) : (
                <ProductDetailSkeleton productDetail={productDetail} />
              )}
            </Grid>

            <Grid item className={classes.right}>
              <ProductInfo productInfo={productDetail} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Route exact path={`${url}`}>
            <ProductDescription product={productDetail} />
          </Route>

          <Route path={`${url}/additional`}>
            <ProductAdditional />
          </Route>
          {/* <Route path={`${url}/additional`} component={ProductAdditional} /> */}

          <Route path={`${url}/reviews`}>
            <ProductReviews />
          </Route>
          {/* <Route path={`${url}/reviews`} component={ProductReviews} /> */}
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
