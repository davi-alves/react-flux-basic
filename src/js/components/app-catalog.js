import React from 'react';

import StoreWatchMixin from '../mixins/StoreWatchMixin';
import AppStore from '../stores/app-store';
import CatalogItem from './app-catalog-item';

function getCatalog () {
  return {items: AppStore.getCatalog()};
}

const Catalog = (props) => {
  let items = props.items.map((item) => <CatalogItem key={item.id} item={item} />);

  return (
    <div className="row">{items}</div>
  );
}

export default StoreWatchMixin(Catalog, getCatalog);
