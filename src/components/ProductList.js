import React from 'react';
import Product from './Product';
import upcycled from '../upcycled.png';
import custom from '../custom.jpeg';
import rig from '../rig.webp';

const products = [
  {
    id: 1,
    name: 'Upcycled Frame Bag',
    imageSrc: `${upcycled}`,
    price: 69.99,
  },
  {
    id: 2,
    name: 'Custom Frame Bag',
    imageSrc: `${custom}`,
    price: 109.99,
  },
  {
    id: 3,
    name: 'Custom Restored Painted Rig',
    imageSrc: `${rig}`,
    price: 209.99,
  },
];

const ProductList = () => {
  return (
    <div className="my-4 mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" id="shop">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          imageSrc={product.imageSrc}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
