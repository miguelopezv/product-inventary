import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import {
  Products,
  AddProduct,
  EditProduct,
  Product,
  Header
} from './components';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  const getProducts = async () =>
    await axios.get(process.env.REACT_APP_API_URL);

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/add-product" component={AddProduct} />
          <Route
            exact
            path="/products"
            render={() => <Products products={products}></Products>}
          />
          <Route exact path="/products/edit/:id" component={EditProduct} />
          <Route exact path="/products/:id" component={Product} />
        </Switch>
      </main>
      <p className="text-center mt-4 p2">All rights reserved.</p>
    </Router>
  );
}

export default App;
