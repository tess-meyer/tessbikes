import React from 'react';

const Product = ({ name, imageSrc, price }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={imageSrc} alt={name} className="w-full h-48 object-cover" />
      <h2 className="mt-4 text-lg font-medium">{name}</h2>
      <p className="mt-2 text-gray-600">${price}</p>
    </div>
  );
};

export default Product;
