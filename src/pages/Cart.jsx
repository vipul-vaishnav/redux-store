import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./../components/CartProduct";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 px-2 py-5 text-purple-700 bg-white dark:bg-gray-900">
        <h1 className="text-2xl dark:text-white">Cart is Empty</h1>
        <p className="dark:text-white">Add some products</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 px-2 py-5 bg-gray-300 sm:px-5 sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
      {cart.map((product) => {
        return <CartProduct key={uuidv4()} product={product} />;
      })}
    </div>
  );
};

export default Cart;
