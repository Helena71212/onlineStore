import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { isAuthSelector } from "../pages/signIn/selectors"
import { ROUTE_NAMES } from "./routeNames";

const PrivateRoute = () =>{
   const isAuth = useSelector(isAuthSelector)
   return isAuth? <Outlet/>: <Navigate to={ROUTE_NAMES.SIGN_IN}/>;
};
export default PrivateRoute