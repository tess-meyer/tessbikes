import React, { useState } from "react";

const Cart = ({ items }) => {
  const [cartItems, setCartItems] = useState(items);

  const updateQuantity = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getUniqueItems = () => {
    const uniqueItems = {};
    cartItems.forEach((item) => {
      if (uniqueItems[item.id]) {
        uniqueItems[item.id].quantity += item.quantity;
      } else {
        uniqueItems[item.id] = { ...item };
      }
    });
    return Object.values(uniqueItems);
  };

  const uniqueItems = getUniqueItems();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <div className="container mx-auto mt-4">
        {uniqueItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {uniqueItems.map((item) => (
              <li key={item.id} className="flex items-center mb-4">
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-bold">{item.name}</h3>
                  <p>€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <button
                      className="text-gray-600 focus:outline-none"
                      disabled={item.quantity === 1}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="mx-2 text-center w-10"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className="text-gray-600 focus:outline-none"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Note
                  </label>
                  <textarea
                    rows="2"
                    className="w-48 h-16 resize-none border rounded-lg"
                  />
                </div>
              </li>
            ))}
            <li className="flex items-center mb-4">
              <div className="flex-1" />
              <div>
                <h3 className="font-bold">Total:</h3>
                <p>€{getTotalPrice().toFixed(2)}</p>
              </div>
              <div className="ml-4">
                <button className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded-full">
                  Checkout
                </button>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
