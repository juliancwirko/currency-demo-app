/*
 * action types
 */

export const SET_CURRENCIES = 'SET_CURRENCIES';
export const CURRENT_CURRENCY_SET = 'CURRENT_CURRENCY_SET';
export const CURRENT_AMOUNT_SET = 'CURRENT_AMOUNT_SET';

/*
 * action creators
 */

export function setCurrencies(currencies) {
  return {
    type: SET_CURRENCIES,
    currencies,
  };
}

export function currentCurrSet(set) {
  return {
    type: CURRENT_CURRENCY_SET,
    set,
  };
}

export function currentAmSet(set) {
  return {
    type: CURRENT_AMOUNT_SET,
    set,
  };
}
