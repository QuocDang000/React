import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, TextField, Typography, Button } from "@mui/material";
import useStyles from "./FilterByPriceStyle.ts";

FilterByPrice.propTypes = {
  onChangePrice: PropTypes.func,
};

function FilterByPrice({ onChangeFilters }) {
  const { classes } = useStyles();
  const [price, setPrice] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrice((prevPrice) => ({
      ...prevPrice,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onChangeFilters(price);
    setPrice({
      salePrice_gte: "",
      salePrice_lte: "",
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant='h6'>Khoảng giá</Typography>

      <Box className={classes.range}>
        <TextField name='salePrice_gte' value={price.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name='salePrice_lte' value={price.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant='outlined' color='primary' size='small' onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
