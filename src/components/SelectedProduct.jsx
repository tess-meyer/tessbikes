import React, { useEffect } from 'react';

const SelectedProduct = ({ product, addToCart, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector('.selected-product');
      if (modal && !modal.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center px-4">
      <div className="selected-product bg-white rounded-lg p-4 md:p-8">
        <img src={product.imageSrc} alt={product.name} className="mx-auto w-64 md:w-80"  style={{ maxHeight: '40vh', width: 'auto' }}/>
        <h2 className="text-xl font-bold text-center mt-4">{product.name}</h2>
        <p className="text-gray-700 text-center mt-2">${product.price.toFixed(2)}</p>
        <p className="mt-2 py-2 text-sm text-gray-600" style={{ maxWidth: '400px' }}>{product.description}</p>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-8 rounded-full" onClick={onClose}>
            Close
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-full" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
