import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const onClickHandler = id => {};

  return (
    <li
      data-category={product.category}
      className="list-group-item align-item-center d-flex justify-content-between"
    >
      <p>
        {product.name}{' '}
        <span className="font-weight-bold">${product.price}</span>
      </p>
      <div>
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-success mr-2"
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onClickHandler(product.id)}
        >
          Delete &times;
        </button>
      </div>
    </li>
  );
};

export default Product;
