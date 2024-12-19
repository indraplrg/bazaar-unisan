import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Category from "./Sections/Category";
import { getAllProduct } from "./Utils/callApi";
import Products from "./Sections/Products";
import Hero from "./Sections/Hero";

const App = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getAllProduct();
      setProducts(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Products products={products} />
    </>
  );
};

export default App;
