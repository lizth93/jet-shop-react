import { Route, Redirect, Switch } from "react-router-dom";

//own
import Main from "../components/Main/main.styled";
import Auth from "../components/Auth/auth.styled";
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

function App() {
  return (
    <>
      <Route path={AUTH} exact>
        <Auth />
      </Route>
      <Route path="/*">
        <Layout>
          <Switch>
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
          </Switch>
        </Layout>
      </Route>
    </>
  );
}

export default App;
