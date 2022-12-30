import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

ProductSort.propTypes = {
  currentSortValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSortValue, onChangeValue }) {
  const handleSortChange = (e, newValue) => {
    onChangeValue(newValue);
  };

  return (
    <Box>
      <Tabs value={currentSortValue} onChange={handleSortChange} aria-label='disabled tabs example'>
        <Tab label='Sắp xếp sản phẩm theo giá từ thấp lên cao' value='salePrice:ASC' />
        <Tab label='Sắp xếp sản phẩm theo giá từ cao xuống thấp' value='salePrice:DESC' />
      </Tabs>
    </Box>
  );
}

export default ProductSort;
