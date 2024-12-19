import { DeviceMobile, Hamburger, TShirt } from "@phosphor-icons/react";
import { Link } from "react-router";

const Category = () => {
  return (
    <div className="flex w-full justify-center p-6">
      <div className="flex gap-10">
        <Link
          className="flex flex-col items-center gap-y-3"
          to={`/categories/jewelery`}
        >
          <Hamburger
            size={70}
            weight="fill"
            className="rounded-full border border-custom-Primary p-5 text-custom-Primary hover:bg-custom-Primary hover:text-white"
          />
          <p href="#" className="text-slate-700">
            Foods
          </p>
        </Link>
        <Link
          className="flex flex-col items-center gap-y-3"
          to={`/categories/`}
        >
          <DeviceMobile
            size={70}
            weight="fill"
            className="rounded-full border border-custom-Primary p-5 text-custom-Primary hover:bg-custom-Primary hover:text-white"
          />
          <p href="#" className="text-slate-700">
            Drinks
          </p>
        </Link>
        <Link
          className="flex flex-col items-center gap-y-3"
          to={`/categories/`}
        >
          <TShirt
            size={70}
            weight="fill"
            className="rounded-full border border-custom-Primary p-5 text-custom-Primary hover:bg-custom-Primary hover:text-white"
          />
          <p href="#" className="text-slate-700">
            Handicraft
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
