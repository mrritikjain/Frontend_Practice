import React from "react";
import Card from "./Components/Card";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "./Context/CartContext";

const App = () => {
  const { cart, removeItem, updateQty, clearCart } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 10;
  const totalPage = Math.ceil(products.length / productPerPage);
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
    <div className="min-h-screen bg-slate-300 p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
        <h2 className="text-4xl font-bold py-2">Product List</h2>
        <span className="text-2xl font-bold bg-blue-600 text-white px-4 py-2 rounded-lg">
          Cart Items: {cart.items.reduce((acc, item) => acc + item.qty, 0)}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* Product List Section */}
        <div className="flex-1">
          {loading ? (
            <p className="text-4xl text-center mt-20">Loading...</p>
          ) : (
            <>
              <Card CurrentProducts={currentProducts} />
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={handleprev}
                  disabled={currentPage === 1}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
                >
                  Prev
                </button>
                <span className="font-bold text-lg">
                  Page {currentPage} of {totalPage}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>

        {/* Cart Sidebar Section */}
        <div className="w-full lg:w-[400px] bg-white p-6 rounded-lg shadow-lg self-start">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h3 className="text-2xl font-bold text-gray-800">Shopping Cart</h3>
            {cart.items.length > 0 && (
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm cursor-pointer transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>

          {cart.items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 font-medium">Your cart is empty.</p>
              <p className="text-gray-400 text-sm mt-1">Add items from the list to get started.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="max-h-[400px] overflow-y-auto pr-1 flex flex-col gap-3">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-3">
                    <div className="flex-1 pr-2">
                      <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">${item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold w-6 h-6 flex items-center justify-center rounded-md cursor-pointer transition-colors"
                      >
                        -
                      </button>
                      <span className="font-semibold text-sm w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold w-6 h-6 flex items-center justify-center rounded-md cursor-pointer transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <span className="font-bold text-lg text-gray-800">Total Price:</span>
                <span className="font-bold text-xl text-green-600">
                  ${cart.items.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
