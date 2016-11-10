import 'whatwg-fetch';
import { currentAmSet } from './actions';
import { calculatePath } from '../settings/api-path';

export function callCurrentAmSet(amountSet, currencySet) {
  return dispatch => fetch(calculatePath(currencySet.in, currencySet.out))
    .then(response => response.json())
    .then(json => {
      const rate = json.rates[currencySet.out];
      const round = (num) => Math.round(num * 100) / 100;
      dispatch(currentAmSet({
        in: amountSet.in,
        out: rate ? round(amountSet.in * rate) : round(amountSet.in),
      }));
    })
    .catch(err => {
      throw new Error('parsing failed', err);
    });
}
