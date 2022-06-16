import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:px-5 bg-purple-600 text-white justify-between items-center py-8 px-2">
      <Link className="sm:text-2xl font-bold tracking-wider text-base" to="/">
        Redux Store
      </Link>
      <p>CopyRight {year} | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
