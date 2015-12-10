import AppConstants from '../constants/app-constants';
import {dispatch, register} from '../dispatchers/app-dispatcher';

export default {
  addItem(item) {
    dispatch({actionType: AppConstants.ADD_ITEM, item});
  },
  removeItem(item) {
    dispatch({actionType: AppConstants.REMOVE_ITEM, item});
  },
  increaseItem(item) {
    dispatch({actionType: AppConstants.INCREASE_ITEM, item});
  },
  descreaseItem(item) {
    dispatch({actionType: AppConstants.DECREASE_ITEM, item});
  },
}
