import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./../Icons/CartIcon";
import HomeIcon from "./../Icons/HomeIcon";
import MoonIcon from "./../Icons/MoonIcon";
import SunIcon from "./../Icons/SunIcon";
import { useSelector } from "react-redux";

const Navbar = ({ handleTheme, theme }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="flex items-center justify-between px-2 py-4 text-white bg-purple-600 sm:px-5">
      <h1 className="text-base font-bold tracking-wider sm:text-2xl">
        Redux Store
      </h1>
      <ul className="flex items-center justify-center gap-3 text-xs">
        <li>
          <Link to="/">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="flex items-center justify-center gap-1 text-xs sm:text-base"
          >
            <CartIcon />
            Cart Items: {cart.length}
          </Link>
        </li>
      </ul>
      <div>
        <button type="button" onClick={() => handleTheme()}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
