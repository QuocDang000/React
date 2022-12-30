import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import useStyles from "./DetailPageStyle.ts";
import ProductThumbnail from "../components/ProductThumbnail";
import { useRouteMatch } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";
import ProductDetailSkeleton from "../components/ProductDetailSkeleton";
import ProductInfo from "../components/ProductInfo";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";

function DetailPage(props) {
  const { classes } = useStyles();
  const {
    params: { productId },
  } = useRouteMatch();

  const { productDetail, loading } = useProductDetail(productId);

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
      </Container>
    </Box>
  );
}

export default DetailPage;
