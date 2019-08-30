import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Product = ({ product, history, setRequest }) => {
  const onClickHandler = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.value) {
        try {
          await axios.delete(`${process.env.REACT_APP_API_URL}/${product.id}`);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          setRequest(true);
        } catch (error) {
          const err = error.toJSON();
          Swal.fire('Error', err.message, 'error');
        }
      }
    });
  };

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
