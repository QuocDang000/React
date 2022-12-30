import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi";
import { Box, Typography } from "@mui/material";
import useStyles from "./FilterByCategoryStyle.ts";

FilterByCategory.propTypes = {
  onChangeFilters: PropTypes.func,
};

function FilterByCategory({ onChangeFilters }) {
  const { classes } = useStyles();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await categoryApi.getAll();
        setCategoryList(
          response.filter((x) => ({
            name: x.name,
            id: x.id,
          }))
        );
      } catch (error) {
        console.log("Failed to get product by category", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    onChangeFilters(category.id);
  };

  return (
    <Box className={classes.root}>
      <Typography variant='h6'>Danh mục sản phẩm</Typography>

      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant='body2'>{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
