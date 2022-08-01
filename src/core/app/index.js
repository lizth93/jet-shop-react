import { Route, Redirect, Switch } from "react-router-dom";

//own
import Main from "components/Main/main.styled";
import Auth from "core/Auth/auth.styled";
import DetailProduct from "core/Product/detail-product/detail-product.styled";
import ProfileForm from "components/Profile/profile-form.styled";
import Layout from "layout/layout";

import {
  PRODUCTS_DEFAULT,
  PRODUCT_ID,
  PRODUCTS_CATEGORY,
  PRODUCTS,
  AUTH,
} from "config";
import "./App.css";
import Cart from "core/cart/cart.styled";
import { CART } from "config";
import useCheckToken from "./use-check-token";
import useGetItemsCart from "core/cart/get-items-cart";
import { ACCOUNT } from "config";

function App() {
  useCheckToken();
  useGetItemsCart();

  return (
    <Switch>
      <Layout>
        <Route path={AUTH} exact>
          <Auth />
        </Route>
        <Route path="/*">
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

          <Route path={ACCOUNT}>
            <ProfileForm />
          </Route>
          <Route path={CART}>
            <Cart />
          </Route>
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
