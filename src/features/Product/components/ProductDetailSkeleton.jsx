import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";

ProductDetailSkeleton.propTypes = {
  productDetail: PropTypes.object,
};

function ProductDetailSkeleton({ productDetail }) {
  return <Skeleton variant='rectangular' width='100%' height={220} />;
}

export default ProductDetailSkeleton;
