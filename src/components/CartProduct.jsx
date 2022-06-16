import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "./../app/CartSlice";

const CartProduct = ({ product }) => {
  const { title, price, image } = product;
  const dispatch = useDispatch();

  return (
    <div className="overflow-hidden bg-white rounded-md shadow-2xl dark:bg-gray-500">
      <div className="p-3 bg-white dark:bg-gray-500">
        <img src={image} className="block mx-auto h-72" alt="product" />
      </div>
      <div className="px-3 py-5 text-white bg-purple-600">
        <h2 className="mb-5 text-xl font-semibold">{title}</h2>
        <h3 className="mb-2 text-lg">
          <span className="italic font-medium">Price</span>: ${price}
        </h3>
        <button
          type="button"
          onClick={() => dispatch(remove(product.id))}
          className="px-5 py-3 font-medium tracking-wider text-white bg-red-600 rounded-md "
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
