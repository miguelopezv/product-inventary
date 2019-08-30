import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Error from './Error';

const AddProduct = ({ history, setRequest }) => {
  const initialProduct = { name: '', price: 0, category: undefined };

  const [product, setProduct] = useState(initialProduct);
  const [error, setError] = useState(false);

  const onChangeHandler = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  // TODO: check validation, it's failing
  const addProduct = async e => {
    let post = false;
    e.preventDefault();

    Object.values(product).forEach(value => {
      if (!value) {
        setError(true);
        return;
      }
      setError(false);
      post = true;
    });

    if (post) {
      try {
        const result = await axios.post(process.env.REACT_APP_API_URL, product);
        if (result.status === 201) {
          Swal.fire(
            'Product created',
            'Product has been created successfully',
            'success'
          );
          setRequest(true);
          history.push('/products');
        }
      } catch (error) {
        const err = error.toJSON();
        Swal.fire('Error', err.message, 'error');
      }
    }
  };

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="text-center">Add Product</h1>

      {error ? <Error message="All fields required" /> : null}

      <form className="mt-5" onSubmit={addProduct}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={e => onChangeHandler(e)}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Price"
            onChange={e => onChangeHandler(e)}
          />
        </div>

        <legend className="text-center">Category:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="dessert"
              onChange={e => onChangeHandler(e)}
            />
            <label className="form-check-label">Dessert</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="drink"
              onChange={e => onChangeHandler(e)}
            />
            <label className="form-check-label">Drink</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="main"
              onChange={e => onChangeHandler(e)}
            />
            <label className="form-check-label">Main</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="salad"
              onChange={e => onChangeHandler(e)}
            />
            <label className="form-check-label">Salad</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default withRouter(AddProduct);
