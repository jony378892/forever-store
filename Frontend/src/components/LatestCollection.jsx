import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext.jsx";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ClipLoader } from "react-spinners";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  useEffect(() => {}, [latestProducts]);

  return (
    <div className="mb-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLECTION"} />
        <p className="w-3/4 m-auto text-sm sm:test-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo similique molestias laudantium, perspiciatis velit facilis voluptate aut tempore sequi assumenda, non ab aliquam eum,
          quibusdam laborum quod officia veritatis.
        </p>
      </div>
      {/* Rendering Products */}
      {!products || products.length === 0 ? (
        <div className="text-center my-10">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 mt-10">
          {latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} price={item.price} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestCollection;
