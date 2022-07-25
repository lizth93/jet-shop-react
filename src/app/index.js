import "./App.css";
import { Route, Redirect } from "react-router-dom";

//own
import Main from "../components/Main/main.styled";
import Header from "../components/Header/header.styled";
import useInitializeProducts from "./use-initialize-products";
import Auth from "../components/Auth/auth.styled";
import { useSelector } from "react-redux";

function App() {
  const authenticated = useSelector((state) => state.itemsAuth.authenticated);
  console.log(authenticated, "autehticated");
  useInitializeProducts();

  return (
    <>
      <Route path="/" exact>
        {!authenticated && <Redirect to="/auth" />}
        {authenticated && <Redirect to="/products/all" />}
      </Route>
      <Route path="/products/" exact>
        {!authenticated && <Redirect to="/auth" />}
        {authenticated && <Redirect to="/products/all" />}
      </Route>
      {!authenticated && (
        <Route path="/auth" exact>
          <Auth />
        </Route>
      )}
      <Header />

      <Main />
    </>
  );
}

export default App;
