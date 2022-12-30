import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Chip } from "@mui/material";
import useStyles from "./FilterViewerStyle.ts";

const FILTER_LIST = [
  {
    id: 1,
    label: "Giao hàng miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: null,
    onTongle: (filters) => {
      return filters.isFreeShip ? (filters.isFreeShip = false) : (filters.isFreeShip = true);
    },
  },

  {
    id: 2,
    label: "Có khuyến mãi",
    isActive: (filters) => filters.isPromotion,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      return filters.isPromotion ? (filters.isPromotion = false) : (filters.isPromotion = true);
    },
    onTongle: null,
  },

  {
    id: 3,
    label: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: (filters) => Boolean(filters.salePrice_gte > 0),
    isVisible: (filters) => Boolean(filters.salePrice_gte > 0),
    isRemovable: true,
    onRemove: (filters) => {
      delete filters.salePrice_gte;
      delete filters.salePrice_lte;
    },
    onTongle: null,
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChangeFilters: PropTypes.func,
};

function FilterViewer({ filters, onChangeFilters }) {
  const { classes } = useStyles();

  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <Box component='ul' className={classes.root}>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.id !== 3 ? x.label : x.label(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            variant='outlined'
            onClick={
              x.isRemovable
                ? null
                : () => {
                    const newFilters = x.onTongle(filters);
                    onChangeFilters(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    const newFilters = x.onRemove(filters);
                    onChangeFilters(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
