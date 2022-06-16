import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Loader from "./../components/Loader";
import ProductCard from "./../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if (res.status === 200) setLoading(false);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 px-2 py-5 text-purple-700 bg-white dark:bg-gray-900">
        <h1 className="text-2xl dark:text-white">Loading...</h1>
        <p className="dark:text-white">Please wait a few seconds!</p>
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 px-2 py-5 bg-gray-300 sm:px-5 sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
      {products.map((product) => {
        return <ProductCard key={uuidv4()} product={product} />;
      })}
    </div>
  );
};

export default Home;
