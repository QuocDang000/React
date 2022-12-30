import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import useStyles from "./ListPageStyle.ts";
import productApi from "../../../api/productApi";
import ProductListSkeleton from "../components/ProductListSkeleton";
import ProductList from "../components/ProductList";
import Pagination from "@mui/material/Pagination";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterViewer from "../components/FilterViewer";

function ListPage(props) {
  const { classes } = useStyles();

  const history = useHistory();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 200,
  });
  const [filters, setFilters] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 9,
    _sort: queryParams._sort || "salePrice:ASC",
  }));

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  }, [history, filters]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to get product list", error);
      }
    };

    fetchProducts();
    setLoading(false);
  }, [filters]);

  const handleChangePage = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleChangeFilters = (newFiltersValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFiltersValue,
    }));
  };

  const handleChangeViewer = (newFiltersViewer) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFiltersViewer,
    }));
  };

  const handleClickProduct = (urlProduct) => {
    console.log("url", urlProduct);
    // setFilters(() => ({
    //   // ...prevFilters,
    //   urlProduct,
    // }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left} item>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChangeFilters={handleChangeFilters} />
            </Paper>
          </Grid>

          <Grid className={classes.right} item>
            <Paper elevation={0}>
              <ProductSort currentSortValue={filters._sort} onChangeValue={handleSortChange} />
              <FilterViewer filters={filters} onChangeFilters={handleChangeViewer} />

              {loading ? (
                <ProductListSkeleton />
              ) : (
                <ProductList data={productList} onClickProduct={handleClickProduct} />
              )}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color='primary'
                  onChange={handleChangePage}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
