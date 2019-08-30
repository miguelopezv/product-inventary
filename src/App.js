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
  const [request, setRequest] = useState(true);

  useEffect(() => {
    if (request) {
      getProducts().then(res => setProducts(res.data));
      setRequest(false);
    }
  }, [request]);

  const getProducts = async () =>
    await axios.get(process.env.REACT_APP_API_URL);

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route
            exact
            path="/add-product"
            render={() => <AddProduct setRequest={setRequest} />}
          />
          <Route
            exact
            path="/products"
            render={() => (
              <Products setRequest={setRequest} products={products}></Products>
            )}
          />
          <Route
            exact
            path="/products/edit/:id"
            render={props => {
              const product = products.filter(
                product => product.id === parseInt(props.match.params.id)
              );

              return (
                <EditProduct setRequest={setRequest} product={product[0]} />
              );
            }}
          />
          <Route exact path="/products/:id" component={Product} />
        </Switch>
      </main>
      <p className="text-center mt-4 p2">All rights reserved.</p>
    </Router>
  );
}

export default App;
