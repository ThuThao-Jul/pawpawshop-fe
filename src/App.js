import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Alert from "./components/Toast";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const user = useSelector((state) => state.userReducer.data);

  return (
    <Router>
      <NavBar />
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/products" component={ProductPage} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/order" component={user ? OrderPage : LogIn} />
        <Route exact path="/cart" component={user ? CartPage : LogIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
