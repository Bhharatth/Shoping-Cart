import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Product from "./components/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register/Register";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";


const App = () => {
  const user = useSelector((state)=> state.user.currentUser);
  console.log(user)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/products/:category">
          <ProductList />
        </Route>
        <Route  path="/singleproduct/:id">
          <SingleProduct />
        </Route>
        <Route  path="/cart">
          <Cart />
        </Route>
        <Route  path="/success">
          <Home />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route  path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
