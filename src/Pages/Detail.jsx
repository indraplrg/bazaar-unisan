import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../Utils/callApi";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getProduct(id);
      setProduct(response);
    }
    fetchData();
  }, []);

  return (
    <div className="flex h-dvh items-center justify-center bg-slate-100 py-4">
      <div className="mt-32 flex h-fit max-w-3xl flex-wrap justify-center gap-5 rounded-sm border bg-white p-5 shadow-md lg:mt-0 lg:flex-nowrap">
        <img src={product?.image} className="h-52 w-52 object-cover" />
        <div>
          <h1 className="text-xl font-medium text-slate-800">
            {product?.title}
          </h1>
          <h3 className="mt-1 text-slate-900">{product?.category}</h3>
          <p className="mt-1 text-sm text-slate-800">{product?.description}</p>
          <div className="mt-2 flex gap-4">
            <h5 className="mt-1 text-slate-900">{product?.price}</h5>
            <button className="bg-slate-700 p-1 px-4 text-white">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
