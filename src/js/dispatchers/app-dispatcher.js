import {Dispatcher} from 'flux';

// creates my own dispatcher instance
const flux = new Dispatcher();

// export the register
export function register(callback) {
  return flux.register(callback);
}

// export the dispatch
export function dispatch(actionType, action) {
  console.log(actionType);
  flux.dispatch(actionType, action);
}
