import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

ProductListSkeleton.propTypes = {
  length: PropTypes.number,
};

ProductListSkeleton.defaultProps = {
  length: 9,
};

function ProductListSkeleton(props) {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(new Array(props.length)).map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant='rectangular' width='100%' height={236} />
              <Skeleton />
              <Skeleton width='60%' />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductListSkeleton;
