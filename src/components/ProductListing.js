import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponents from "./ProductComponents";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [x, setX] = useState()
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
    setX(response.data)
  };

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div className="ui grid container">
     { x &&  <ProductComponents />}
    </div>
  );
};

export default ProductPage;