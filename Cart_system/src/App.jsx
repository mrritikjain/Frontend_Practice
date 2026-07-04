import React from "react";
import Card from "./Components/Card";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="h-full bg-slate-300">
      <h2 className="text-4xl font-bold text-center py-4">Product List</h2>
      {loading ? (
        <p className="text-4xl text-center justify-center mt-20">Loading...</p>
      ) : (
        <Card products={products} />
      )}
    </div>
  );
};

export default App;
