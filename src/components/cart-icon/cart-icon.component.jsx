import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount }) => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
