import React from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import useStyles from "./FilterByServiceStyle.ts";

FilterByService.propTypes = {
  filter: PropTypes.object,
  onChangeFilters: PropTypes.func,
};

function FilterByService({ filters, onChangeFilters }) {
  const { classes } = useStyles();

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    onChangeFilters({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant='h6' align='center'>
        Dịch vụ
      </Typography>

      <ul className={classes.list}>
        {[
          {
            value: "isPromotion",
            label: "Có khuyến mãi",
          },
          {
            value: "isFreeShip",
            label: "Miễn phí vận chuyển",
          },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  name={service.value}
                  checked={
                    (Boolean(filters.isFreeShip) && service.value === "isFreeShip") ||
                    (Boolean(filters.isPromotion) && service.value === "isPromotion")
                  }
                  onChange={handleCheckBox}
                  color='primary'
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
