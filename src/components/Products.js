import React, { Fragment } from 'react';
import Product from './Product';

const Products = ({ products, setRequest }) => (
  <Fragment>
    <h1 className="text-center">Products</h1>
    <ul className="list-group mt-5">
      {products.map(product => (
        <Product
          setRequest={setRequest}
          key={product.id}
          product={product}
        ></Product>
      ))}
    </ul>
  </Fragment>
);

export default Products;
