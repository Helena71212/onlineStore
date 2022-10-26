
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../cart/thunks";
import Profile from "../components";
import {  orderSelector } from "../selectors";
import { useEffect } from "react";
import { userInfoSelector } from "../../signIn/selectors";
import { ROUTE_NAMES } from "../../../router/routeNames";


const OrderContainer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const userInfo = useSelector(userInfoSelector);

  const orders = useSelector(orderSelector);
  const navigate = useNavigate();
  
  const handleNavigateToOrderDetails = useCallback((id) => {
    navigate(`${ROUTE_NAMES.PROFILE}/${id}`);
}, []);

  useEffect(() => {
    dispatch(getOrders());
}, []);

  return <Profile
  orders={orders}
  userInfo={userInfo}
  handleNavigateToOrderDetails={handleNavigateToOrderDetails}
  />;
};

export default OrderContainer;