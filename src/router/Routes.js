import { Routes, Route } from "react-router-dom";
import CartContainer from "../pages/cart/container";
import DetailContainer from "../pages/detailPokemon/container";
import Header from "../pages/header";
import HomeContainer from "../pages/homePage/container/HomeContainer";
import OrderContainer from "../pages/profile/container";
import ShopContainer from "../pages/shop/container/ShopContainer";
import AuthContainer from "../pages/signIn/container/SignInContainer";
import SignUpContainer from "../pages/signUp/container/SignUpContainer";
import PrivateRoute from "./privateRoutes";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.SIGN_IN} element={<AuthContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.DETAIL_POKEMON} element={<DetailContainer/>}/>
      <Route path={ROUTE_NAMES.CART} element={<CartContainer/>}/>
      <Route  element={<PrivateRoute />}>
      <Route
        path={ROUTE_NAMES.SHOP}
        element={
            <ShopContainer />
        }
      />
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      
      <Route path={ROUTE_NAMES.PROFILE} element={<OrderContainer />} />
      </Route>

    </Routes>
  );
};
export default Router;
