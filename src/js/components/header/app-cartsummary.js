import React from 'react';
import {Link} from 'react-router';

import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppStore from '../../stores/app-store';

const totals = () => AppStore.getCartTotals();

const CartSummary = (props) => {
  return(
    <div style={{paddingTop: 15}}>
      <Link to="/cart" className="btn btn-success">
        Cart Items: {`${props.qty} / $${props.total}`}
      </Link>
    </div>
  );
};

export default StoreWatchMixin(CartSummary, totals);
