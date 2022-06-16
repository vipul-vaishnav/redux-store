import React from "react";
import { useDispatch } from "react-redux";
import { add } from "./../app/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { title, price, description, category, image } = product;
  return (
    <div className="overflow-hidden bg-white rounded-md shadow-2xl dark:bg-gray-500">
      <div className="p-3 bg-white dark:bg-gray-500">
        <img src={image} className="block mx-auto h-72" alt="product" />
      </div>
      <div className="px-3 py-5 text-white bg-purple-600">
        <h2 className="mb-5 text-xl font-semibold">{title}</h2>
        <h3 className="mb-2 text-lg">
          <span className="italic font-medium">Category</span>: {category}
        </h3>
        <h3 className="mb-2 text-lg">
          <span className="italic font-medium">Price</span>: ${price}
        </h3>
        <p className="mb-8 overflow-hidden text-lg font-regular text-ellipsis whitespace-nowrap">
          {description}
        </p>
        <button
          type="button"
          onClick={() => dispatch(add(product))}
          className="px-5 py-3 font-medium tracking-wider text-white bg-green-600 rounded-md "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
