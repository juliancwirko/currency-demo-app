import { SET_CURRENCIES, CURRENT_CURRENCY_SET, CURRENT_AMOUNT_SET } from './actions';
import { combineReducers } from 'redux';

function currencies(state = ['EUR', 'PLN', 'USD', 'GBP'], action) {
  switch (action.type) {
    case SET_CURRENCIES:
      return action.currencies;
    default:
      return state;
  }
}

function currentCurrencySet(state = { in: 'USD', out: 'PLN' }, action) {
  switch (action.type) {
    case CURRENT_CURRENCY_SET:
      return action.set;
    default:
      return state;
  }
}

function currentAmountSet(state = { in: 0, out: 0 }, action) {
  switch (action.type) {
    case CURRENT_AMOUNT_SET:
      return action.set;
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  currencies,
  currentCurrencySet,
  currentAmountSet,
});

export default mainReducer;
