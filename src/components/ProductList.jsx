import React, { useState } from 'react';
import Product from './Product';
import SelectedProduct from './SelectedProduct';
import Cart from './Cart';
// assets
import upcycled from '../upcycled.png';
import custom from '../custom.jpeg';
import rig from '../rig.webp';

const placeholderDescription1 = 'Some wet/muddy creek crossings, but otherwise dry. This is a legitimate expert-level trail, but much of the difficulty can be mitigated by slowing down and picking your line carefully. Blast down Ridgeline all the way to Lake Imaging Road.';
const placeholderDescription2 = 'This trail can be sandy during dry summer months and is best after rain, in the spring or fall. Trail contains a rope-suspended ladder bridge, elevated bridges and a long-straight skinny. There is an optional drop 1/2 way down.';
const placeholderDescription3 = 'Very loose and dry. There is some pedalling but no uphill sections. Fast transitions and high berms help with the turns.';

const products = [
  {
    id: 1,
    name: 'Upcycled Frame Bag',
    imageSrc: `${upcycled}`,
    price: 69.99,
    description: placeholderDescription1
  },
  {
    id: 2,
    name: 'Custom Frame Bag',
    imageSrc: `${custom}`,
    price: 109.99,
    description: placeholderDescription2
  },
  {
    id: 3,
    name: 'Custom Restored Painted Rig',
    imageSrc: `${rig}`,
    price: 209.99,
    description: placeholderDescription3
  },
];

const ProductList = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

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

  const selectedProduct = selectedProductId
  ? products.find((product) => product.id === selectedProductId)
  : null;


  return (
    <div className="my-4 mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" id="shop">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          imageSrc={product.imageSrc}
          price={product.price}
          onProductClick={() => onProductClick(product.id)}
          addToCart={() => addToCart({ ...product, quantity: 1 })}        />
      ))}
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
