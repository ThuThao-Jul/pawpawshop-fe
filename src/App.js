import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Alert from "./components/Toast";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import CartPage from "./pages/CartPage";
import CreateNewPet from "./pages/CreateNewPet";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import MyAccount from "./pages/MyAccount";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const user = useSelector((state) => state.userReducer.data);

  return (
    <Router>
      <div style={{display: (window.location.pathname.includes('/admin')) ? 'none' : 'block'}}>
      <NavBar />
      </div>
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/products" component={ProductPage} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/order" component={user ? OrderPage : LogIn} />
        <Route exact path="/cart" component={user ? CartPage : LogIn} />
        <Route exact path="/pet/create" component={user ? CreateNewPet : LogIn} />
        <Route exact path="/account" component={user ? MyAccount : LogIn} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/login" component={AdminLogin} />
      </Switch>
      <div style={{display: (window.location.pathname.includes('/admin')) ? 'none' : 'block'}}>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
