import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../router/routeNames";
import {BiCartAlt} from "react-icons/bi"
import{BsFillPersonFill} from "react-icons/bs"
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Logo from "../../../src/static/images/Logo.png";

import styles from "./index.module.css";
import useCart from "../../hook/useCart";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    color: "#000",
    background: "#00a8e2",
  },
}));
const Header = () => {
  const { cart} = useCart();
  const isAuth = useSelector((state) => state.auth.isAuth)
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.headerTitle} to={ROUTE_NAMES.HOME}>
        PokéStore
        </Link>
        <Link className={styles.headerSignIn} to={ROUTE_NAMES.DETAIL_POKEMON}></Link>
        <Link className={styles.headerSignIn} to={ROUTE_NAMES.SHOP}>Shop</Link>

        <div className={styles.headerAuth}>
        {isAuth ? (
         <Link className={styles.personArea} to={ROUTE_NAMES.PROFILE}>
         <BsFillPersonFill className={styles.personAreaIcon}/></Link>
        ) : (
          <Link className={styles.headerSignIn} to={ROUTE_NAMES.SIGN_IN}>
          Sign In
        </Link>
        )}
          <Link className={styles.headerCart} to={ROUTE_NAMES.CART}>
            <StyledBadge badgeContent={cart.quantity === 0 ? null : cart.quantity}>
            <BiCartAlt className={styles.headerCartIcon} />
            </StyledBadge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
