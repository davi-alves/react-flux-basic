import React from 'react';

import AppStore from '../stores/app-store';
import CatalogItem from './app-catalog-item';

function getCatalog () {
  return {items: AppStore.getCatalog()};
}

export default class Catalog extends React.Component {
    constructor() {
        super();
        this.state = getCatalog();
    }

    render() {
      let items = this.state.items.map((item) => <CatalogItem key={item.id} item={item} />);

      return (
        <div className="row">{items}</div>
      );
    }
}
