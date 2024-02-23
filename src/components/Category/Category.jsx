import React from "react";
import { useSelector } from "react-redux";
import "./Category.css";

function Category({ setProduct, category }) {
  const prod = useSelector((state) => state.allProducts.products);
  return (
    <div className="w-50 d-flex ">
      <label className="lead mx-2 mt-2">Select Categories</label>
      <select className="form-select w-50 my-2">
        <option onClick={() => setProduct(prod)} selected>
          All
        </option>
        {prod &&
          prod
            .filter(
              (value, index, orginalArray) =>
                orginalArray.findIndex(
                  (value2) => value2.category === value.category
                ) === index
            )
            .map((obj) => (
              <option
                onClick={() => {
                  category(obj.category);
                  console.log("category selected");
                }}
              >
                {obj.category}
              </option>
            ))}
      </select>
    </div>
  );
}

export default Category;
