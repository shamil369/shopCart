import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ProductSearch.css";

function ProductSearch({ setProduct }) {
  const prod = useSelector((state) => state.allProducts.products);
  const [searchedProduct, setSearchedProduct] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searchedProduct}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("product search result", result.products);
        result.products.length === 0
          ? setProduct(prod)
          : setProduct(result.products);
      });
  }, [searchedProduct]);
  return (
    <div>
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          onChange={(e) => setSearchedProduct(e.target.value)}
          value={searchedProduct}
          placeholder="What are you looking for?"
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductSearch;
