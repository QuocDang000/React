import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import { Box } from "@mui/material";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChangeFilters: PropTypes.func,
};

function ProductFilters({ filters, onChangeFilters }) {
  const handleChangeCategory = (newCategoryID) => {
    const newFilters = {
      ...filters,
      "category.id": newCategoryID,
    };
    onChangeFilters(newFilters);
  };

  const handleChangePrice = (newPrice) => {
    onChangeFilters(newPrice);
  };

  const handleChangeService = (newService) => {
    onChangeFilters(newService);
  };

  return (
    <Box>
      <FilterByCategory onChangeFilters={handleChangeCategory} />
      <FilterByPrice onChangeFilters={handleChangePrice} />
      <FilterByService filters={filters} onChangeFilters={handleChangeService} />
    </Box>
  );
}

export default ProductFilters;
