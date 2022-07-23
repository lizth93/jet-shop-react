import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";

//own
import Main from "../components/Main/main.styled";
import Header from "../components/Header/header.styled";
import useInitializeProducts from "./use-initialize-products";
import Auth from "../components/Auth/auth.styled";

function App() {
  useInitializeProducts();
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>
      <Route path="/products/" exact>
        <Redirect to="/auth" />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Header />
      <Main />
    </>
  );
}

export default App;
