import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductsByCategory } from "../Utils/callApi";
import Card from "../Components/Card";

const Categories = () => {
  const { category } = useParams();
  const [productsCategory, setProductsCategory] = useState();

  useEffect(() => {
    async function fetchData() {
      const productByCategory = await getProductsByCategory(category);
      setProductsCategory(productByCategory);
    }

    fetchData();
  }, []);

  return (
    <div className="h-dvh p-5">
      <Card products={productsCategory} />
    </div>
  );
};

export default Categories;
