import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import Product from "./Product";

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data, onClickProduct }) {
  const handleProductClick = (productId) => {
    onClickProduct(productId);
  };

  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Product product={product} onClickProduct={handleProductClick} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
