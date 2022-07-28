import { Route, Redirect, Switch } from "react-router-dom";
// import { useDispatch } from "react-redux";

//own
import Main from "components/Main/main.styled";
import Auth from "components/Auth/auth.styled";
import DetailProduct from "components/Product/detail-product/detail-product.styled";
import ProfileForm from "components/Profile/profile-form.styled";
import Layout from "components/layout/layout";

import {
  PRODUCTS_DEFAULT,
  PRODUCT_ID,
  PROFILE,
  PRODUCTS_CATEGORY,
  PRODUCTS,
  AUTH,
} from "config";
import "./App.css";
import Cart from "components/cart/cart.styled";
import { CART } from "config";
import useCheckToken from "./use-check-token";

function App() {
  useCheckToken();
  return (
    <Switch>
      <Route path={AUTH} exact>
        <Auth />
      </Route>
      <Route path="/*">
        <Layout>
          <Route path="/" exact>
            <Redirect to={PRODUCTS_DEFAULT} />
          </Route>
          <Route path={PRODUCTS} exact>
            <Redirect to={PRODUCTS_DEFAULT} />
          </Route>
          <Route path={PRODUCTS_CATEGORY}>
            <Main />
          </Route>
          <Route path={PRODUCT_ID} exact>
            <DetailProduct />
          </Route>

          <Route path={PROFILE}>
            <ProfileForm />
          </Route>
          <Route path={CART}>
            <Cart />
          </Route>
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
