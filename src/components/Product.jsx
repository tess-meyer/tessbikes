import React from 'react';

const Product = ({ id, name, imageSrc, price, description, onProductClick, addToCart }) => {
  return (
    <div className="border rounded-lg p-4" onClick={onProductClick}>
      <img src={imageSrc} alt={name} className="w-full h-48 object-cover" />
      <h2 className="mt-4 text-lg font-medium">{name}</h2>
      <p className="mt-2 text-gray-600">€{price}</p>
      {/* <button
        className="bg-indigo-600 text-white py-2 px-4 rounded-full mt-4"
        onClick={(e) => {
          e.stopPropagation();
          addToCart();
        }}
      >
        Add to cart
      </button> */}
    </div>
  );
};

export default Product;