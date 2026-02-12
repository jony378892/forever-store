import { useContext } from "react";
import ShopContext from "../context/ShopContext.jsx";
import Title from "./Title";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
  const { products, productsLoading } = useContext(ShopContext);

  return (
    <div className="mb-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLECTION"} />
        <p className="w-3/4 m-auto text-sm sm:test-sm md:text-base text-gray-600">
          Step into style with our newest arrivals, designed to bring comfort,
          elegance, and confidence to every occasion. From timeless classics to
          modern trends, our collection has something for everyone
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 mt-10">
          {products &&
            products
              .slice(0, 10)
              .map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  price={item.price}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default LatestCollection;
