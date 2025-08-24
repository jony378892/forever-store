import { Suspense, useContext } from "react";
import ShopContext from "../context/ShopContext";
import Title from "./Title";
import Skeleton from "./Skeleton";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Forever is your destination for timeless fashion and effortless style.
          We blend comfort with trend-forward designs to create pieces you'll
          love wearing every day. From casual staples to bold statements, each
          item is crafted with care and made to last.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 mt-10">
        {products &&
          products.slice(0, 5).map((item, index) => (
            <Suspense fallback={<Skeleton />} key={index}>
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
