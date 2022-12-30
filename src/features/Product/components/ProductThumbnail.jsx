import React from "react";
import PropTypes from "prop-types";
import { THUMBNAIL_PLACEHOLDER } from "../../../constants";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
  loading: PropTypes.bool,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? // ? `${STATIC_HOST.thumbnail.url}`
      `https://api.ezfrontend.com${product.thumbnail.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;

  return <img src={thumbnailUrl} alt={product.name} width='100%' />;
}

export default ProductThumbnail;
