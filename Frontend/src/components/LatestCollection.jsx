import { useContext } from "react";
import ShopContext from "../context/ShopContext.jsx";
import Title from "./Title";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

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
      {/* Rendering Products */}
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
    </div>
  );
};

export default LatestCollection;
