import React from "react";
import Card from "../Components/Card";

const Products = ({ products }) => {
  return (
    <div id="products">
      <h1 className="text-center text-2xl text-slate-600 lg:ml-6 lg:text-left">
        Products
      </h1>
      <Card products={products} />
    </div>
  );
};

export default Products;
