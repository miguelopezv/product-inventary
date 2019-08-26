import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Products,
  AddProduct,
  EditProduct,
  Product,
  Header
} from './components';

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
          <Route exact path="/products/:id" component={Product} />
        </Switch>
      </main>
      <p className="text-center mt-4 p2">All rights reserved.</p>
    </Router>
  );
}

export default App;
