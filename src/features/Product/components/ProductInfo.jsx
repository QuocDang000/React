import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import useStyles from "./ProductInfoStyle.ts";
import { formatPrice } from "../../../utils";

ProductInfo.propTypes = {
  productInfo: PropTypes.object,
};

function ProductInfo({ productInfo }) {
  const { classes } = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = productInfo;

  return (
    <Box className={classes.root}>
      <Typography className={classes.name} variant='h4'>
        {name}
      </Typography>
      <Typography className={classes.description} variant='body1'>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component='span' className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        <Box component='span' className={classes.originalPrice}>
          {formatPrice(originalPrice)}
        </Box>
        <Box component='span' className={classes.promotionPercent}>
          {promotionPercent > 0 ? `-${promotionPercent}%` : ""}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductInfo;
