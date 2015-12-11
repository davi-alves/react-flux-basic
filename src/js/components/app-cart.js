import React from 'react';

import StoreWatchMixin from '../mixins/StoreWatchMixin';
import AppStore from '../stores/app-store';
import CartItem from './app-cart-item';

const cartItems = () => ({items: AppStore.getCart()});

const Cart = (props) => {
  let total = 0;
  let items = props.items.map((item, i) => {
    let subtotal = item.cost * item.qty;
    total += subtotal;

    return <CartItem subtotal={subtotal} key={i} item={item}/>;
  });

  return(
    <div>
      <h1>Cart</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr className="text-right">
            <td colSpan="4">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default StoreWatchMixin(Cart, cartItems);
