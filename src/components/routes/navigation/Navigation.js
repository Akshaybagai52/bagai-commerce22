import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../Assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../utility/firebase/firebase";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropdown from "../../cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from "./navigation.styles";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
