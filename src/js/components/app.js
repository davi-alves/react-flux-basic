import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Template from './app-template';
import Catalog from './catalog/app-catalog';
import CatalogDetail from './product/app-catalog-detail';
import Cart from './cart/app-cart';

export default () => {
  return(
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={Catalog} />
        <Route path="cart" component={Cart} />
        <Route path="item/:item" component={CatalogDetail} />
      </Route>
    </Router>
  );
}
