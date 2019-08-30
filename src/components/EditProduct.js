import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Error from './Error';

const EditProduct = ({ product, setRequest, history }) => {
  const nameRef = useRef('');
  const priceRef = useRef('');

  const [error, setError] = useState(false);
  const [category, setCategory] = useState('');

  const onChangeHandler = e => {
    setCategory(e.target.value);
  };

  const editProduct = async e => {
    e.preventDefault();

    const cat = category === '' ? product.category : category;

    const editedProduct = {
      price: priceRef.current.value,
      name: nameRef.current.value,
      category: cat
    };

    if (
      !editedProduct.name ||
      !editedProduct.price ||
      !editedProduct.category
    ) {
      setError(true);
      return;
    } else {
      setError(false);

      try {
        const result = await axios.put(
          `${process.env.REACT_APP_API_URL}/${product.id}`,
          editedProduct
        );

        if (result.status === 200) {
          Swal.fire(
            'Product edited',
            'Product has been edited successfully',
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
      <h1 className="text-center">Edit Product</h1>

      {error ? <Error message="All fields required" /> : null}

      <form className="mt-5" onSubmit={editProduct}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            ref={nameRef}
            defaultValue={product.name}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            ref={priceRef}
            defaultValue={product.price}
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
              defaultChecked={product.category === 'dessert'}
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
              defaultChecked={product.category === 'drink'}
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
              defaultChecked={product.category === 'main'}
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
              defaultChecked={product.category === 'salad'}
              onChange={e => onChangeHandler(e)}
            />
            <label className="form-check-label">Salad</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Edit Product"
        />
      </form>
    </div>
  );
};

export default withRouter(EditProduct);
