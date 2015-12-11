import {EventEmitter} from 'events';

import AppConstants from '../constants/app-constants';
import {dispatch, register} from '../dispatchers/app-dispatcher';

const CHANGE_EVENT = 'change';
var _catalog = [];

for (let i = 0; i < 9; i++) {
  _catalog.push({
    'id': 'Widget' + i,
    'title': 'Widget #' + i,
    'summary': 'A great widget',
    'description': 'Lorem ipsum dolor sit amet',
    'cost': i,
  });
};

var _cartItems = [];

const _removeItem = (item) => _cartItems.splice(_cartItems.findIndex(i => i === item), 1);
const _findCartItem = (item) => _cartItems.find(_i => _i.id === item.id);
const _increaseItem = (item) => item.qty++;
const _decreaseItem = (item) => {
  item.qty--;
  if (item.qty <= 0) {
    _removeItem(item);
  }
}
const _addItem = (item) => {
  const cartItem = _findCartItem(item);
  if (!cartItem) {
    _cartItems.push(Object.assign({qty: 1}, item));
  } else {
    _increaseItem(cartItem);
  }
}
const _cartTotals = (qty = 0, total = 0) => {
  total = _cartItems.map((item) => item.qty * item.cost).reduce((prevVal, curVal) => prevVal + curVal);
  qty = _cartItems.map((item) => item.qty).reduce((prevVal, curVal) => prevVal + curVal);

  return {qty, total}
};


const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart() {
    return _cartItems;
  },

  getCartTotals() {
    return _cartItems();
  },

  getCatalog(){
    return _catalog.map((item) =>
      Object.assign({}, item, _cartItems.find((_i) =>_i.id === item.id)
      ));
  },

  dispatcherIndex: register(function (action) {
    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        _removeItem(action.item);
        break;
      case AppConstants.INCREASE_ITEM:
        _increaseItem(action.item);
        break;
      case AppConstants.DECREASE_ITEM:
        _decreaseItem(action.item);
        break;
    }

    AppStore.emitChange();
  })
});

export default AppStore;
