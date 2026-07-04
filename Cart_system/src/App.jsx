import React from "react";
import Card from "./Components/Card";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 10;
  const totalPage = products.length / productPerPage;
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);
  const handleprev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
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
        <>
          <Card CurrentProducts={currentProducts} />
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleprev}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
