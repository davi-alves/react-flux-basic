const CartAPI = {
  catalog: [],
  cartItems: [],
  removeItem(item) {
    this.cartItems.splice(this.cartItems.findIndex(i => i === item), 1);
  },
  findCartItem(item) {
    return this.cartItems.find(_i => _i.id === item.id);
  },
  increaseItem(item) {
    item.qty++;
  },
  decreaseItem(item) {
    item.qty--;
    if (item.qty <= 0) {
      this.removeItem(item);
    }
  },
  addItem(item) {
    const cartItem = this.findCartItem(item);
    if (!cartItem) {
      this.cartItems.push(Object.assign({qty: 1}, item));
    } else {
      this.increaseItem(cartItem);
    }
  },
  cartTotals(qty = 0, total = 0) {
     this.cartItems.map((item) => {
      total += item.qty * item.cost
      qty += item.qty;
    });

    return {qty, total}
  },
  getCatalog(){
    return this.catalog.map((item) =>
      Object.assign({}, item, this.cartItems.find((_i) =>_i.id === item.id)
    ));
  },
  init() {
    for (let i = 0; i < 9; i++) {
      this.catalog.push({
        'id': 'Widget' + i,
        'title': 'Widget #' + i,
        'summary': 'A great widget',
        'description': 'Lorem ipsum dolor sit amet',
        'cost': i,
      });
    };
  }
};
CartAPI.init();

export default CartAPI;
