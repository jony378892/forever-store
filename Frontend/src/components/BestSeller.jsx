import { Suspense, useContext } from "react";
import ShopContext from "../context/ShopContext";
import Title from "./Title";
import Skeleton from "./Skeleton";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products, productsLoading } = useContext(ShopContext);

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
      {productsLoading ? (
        <div className="flex-1 flex items-center justify-center py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="size-32"
          >
            <path
              fill="#110107"
              stroke="#110107"
              strokeWidth="2"
              transformOrigin="center"
              d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="spline"
                dur="2"
                values="0;120"
                keyTimes="0;1"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default BestSeller;
