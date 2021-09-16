import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Alert from "./components/Toast";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <NavBar />
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/products" component={ProductPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
