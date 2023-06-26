import React, { useState } from "react";
import Product from "./Product";
import SelectedProduct from "./SelectedProduct";
import Cart from "./Cart";
// assets
import upcycled from "../upcycled.png";
import custom from "../custom.jpeg";
import rig from "../rig.webp";

const placeholderDescription1 =
  "Bespoke, made to fit your bike. Handmade in Berlin with love from locally sourced preloved materials. Perfect for around town or shorter fine-weather tours. Free repairs for your first 3 months.";
const placeholderDescription2 =
  "Need something more sturdy for a longer tour? I understand. Water resistant, durable, bikepacker approved. Complete with a small repair kit for when the going gets really tough. Handmade in Berlin with love.";
const placeholderDescription3 =
  "Eliminate plastic from your life. Perfect for anything you would once have used plastic wrap for. Handmade in Berlin with love.";

const products = [
  {
    id: 1,
    name: "Custom Upcycled Frame Bag",
    imageSrc: `${upcycled}`,
    price: 69.99,
    description: placeholderDescription1,
  },
  {
    id: 2,
    name: "Custom Waterproof Frame Bag",
    imageSrc: `${custom}`,
    price: 109.99,
    description: placeholderDescription2,
  },
  {
    id: 3,
    name: "Beeswax Wraps",
    imageSrc: `${rig}`,
    price: 9.99,
    description: placeholderDescription3,
  },
];

const ProductList = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onProductClick = (id) => {
    setSelectedProductId(id);
  };

  const handleClose = () => {
    setSelectedProductId(null);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    handleClose();
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const selectedProduct = selectedProductId
    ? products.find((product) => product.id === selectedProductId)
    : null;

  return (
    <div
      className="my-4 mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      id="shop"
    >
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          imageSrc={product.imageSrc}
          price={product.price}
          onProductClick={() => onProductClick(product.id)}
          addToCart={() => addToCart({ ...product, quantity: 1 })}
        />
      ))}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-1/2">
            <Cart items={cartItems} />
            <button
              className="bg-indigo-600 text-white py-2 px-4 rounded-full mt-4"
              onClick={toggleCart}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {selectedProductId && (
        <SelectedProduct
          product={selectedProduct}
          addToCart={() => addToCart({ ...selectedProduct, quantity: 1 })}
          onClose={handleClose}
        />
      )}
      {cartItems.length > 0 && <Cart items={cartItems} />}
    </div>
  );
};

export default ProductList;
