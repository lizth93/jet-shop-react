import { Route, Redirect, Switch } from "react-router-dom";

//own
import Main from "components/Main/main.styled";
import Auth from "core/Auth/auth.styled";
import DetailProduct from "core/Product/detail-product/detail-product.styled";
import ChangePassword from "core/account/index.styled";
import Layout from "layout/layout";

import {
  PRODUCTS_DEFAULT,
  PRODUCT_ID,
  PRODUCTS_CATEGORY,
  PRODUCTS,
  AUTH,
} from "config";
import "./App.css";
import Cart from "core/cart/index.styled";
import { CART } from "config";
import useCheckToken from "./use-check-token";
import useGetItemsCart from "core/cart/item/get-items";
import { ACCOUNT } from "config";
import { HISTORY } from "config";
import HistoryItems from "core/account/history/index.styled";
import { REMEMBER_PWD } from "config";
import RememberPwd from "core/Auth/remember-pwd/index.styled";

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
            <ChangePassword />
          </Route>
          <Route path={HISTORY}>
            <HistoryItems />
          </Route>
          <Route path={CART}>
            <Cart />
          </Route>
          <Route path={REMEMBER_PWD}>
            <RememberPwd />
          </Route>
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
