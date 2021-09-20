import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);
