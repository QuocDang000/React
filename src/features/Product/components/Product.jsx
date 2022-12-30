import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { THUMBNAIL_PLACEHOLDER } from "../../../constants/index";
import { useHistory } from "react-router-dom";
import useStyles from "./ProductStyle.ts";
import { formatPrice } from "../../../utils";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product, onClickProduct }) {
  const { classes } = useStyles();
  const history = useHistory();
  const params = useRouteMatch();

  const thumbnailUrl = product.thumbnail
    ? // ? `${STATIC_HOST.thumbnail.url}`
      `https://api.ezfrontend.com${product.thumbnail.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;

  const handleClickProduct = () => {
    history.push(`/products/${product.id}`);
    onClickProduct(`${params.path}${product.id}`);
    // useProductDetail(product.id);
  };

  return (
    <Box className={classes.root} padding={1} onClick={handleClickProduct}>
      <Box padding={1} minheight='200px'>
        <img src={thumbnailUrl} alt={product.name} width='100%' />
      </Box>
      <Typography variant='body2'>{product.name}</Typography>
      <Typography variant='body2'>
        <Box component='span' fontWeight='bold' fontSize='20px' marginRight='12px'>
          {formatPrice(product.salePrice)}
        </Box>

        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
