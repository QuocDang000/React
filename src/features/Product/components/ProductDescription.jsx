import React from "react";
import PropTypes from "prop-types";
import { Box, Paper } from "@mui/material";
import * as DOMPurify from "dompurify";

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: "15px" }}>
      <Box dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
