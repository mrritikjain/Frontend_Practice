import React from "react";

const Card = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-around gap-4 my-4 flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="border bg-white shadow-lg m-2 p-2 rounded-lg text-center w-[300px] h-[400px] "
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[250px] object-cover items-center justify-center "
          />
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-lg">${product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer mt-2 hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
