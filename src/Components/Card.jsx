import { Link } from "react-router";

const Card = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-3">
      {products?.length > 0 ? (
        products.map((item) => {
          return (
            <Link
              className="flex max-w-32 flex-col gap-2 border p-4 shadow-lg hover:shadow-sm hover:backdrop-brightness-90 lg:max-w-44"
              key={item.id}
              to={`/detail/${item.id}`}
            >
              <div>
                <img
                  src={item.image}
                  className="h-28 w-full bg-center object-contain lg:h-36"
                />
                <h3 className="... truncate text-slate-900">{item.title}</h3>
                <h4 className="text-sm text-slate-900">{item.price}</h4>
              </div>
            </Link>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Card;
