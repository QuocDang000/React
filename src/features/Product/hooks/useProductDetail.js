import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productApi from "../../../api/productApi";

useProductDetail.propTypes = {
  productId: PropTypes.number,
};

function useProductDetail(productId) {
  console.log("productId", productId);
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductId = async () => {
      try {
        const response = await productApi.get(productId);
        setProductDetail(response);
        setLoading(true);
        console.log("123");
      } catch (error) {
        console.log("Failed to get product", error);
      }
    };

    fetchProductId();
  }, [productId]);

  return {
    productDetail,
    loading,
  };
}

export default useProductDetail;
