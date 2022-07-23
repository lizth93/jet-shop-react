import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

//own
import Main from "../components/Main/main.styled";
import Header from "../components/Header/header.styled";
import useInitializeProducts from "./use-initialize-products";
import Auth from "../components/Auth/auth.styled";

function App() {
  useInitializeProducts();
  return (
    <>
      <Switch>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/" exact>
          <Redirect to="/products/all" />
        </Route>
        <Route path="/products/" exact>
          <Redirect to="/products/all" />
        </Route>
        <Route path="/products/:category" exact>
          <Header />
          <Main />
        </Route>
      </Switch>
    </>
  );
}

export default App;
