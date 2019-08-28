import React, { useState } from 'react';

const AddProduct = () => {
  const initialProduct = { name: '', price: 0, category: undefined };
  const [product, setProduct] = useState(initialProduct);

  const onChangeHandler = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="text-center">Add Product</h1>
      <form className="mt-5">
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

export default AddProduct;
