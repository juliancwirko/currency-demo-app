import React from 'react';

import { describe, it } from 'mocha';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Calculator from '../app/components/Calculator/Calculator';
import CurrencySelector from '../app/components/CurrencySelector/CurrencySelector';
import AmountInput from '../app/components/AmountInput/AmountInput';

import store from '../app/redux/store';
import { currentCurrSet, currentAmSet } from '../app/redux/actions';

describe('Components', () => {
  it('should render two CurrencySelectors', () => {
    const wrapper = mount(<Calculator store={store} />);
    expect(wrapper.find(CurrencySelector)).to.have.length(2);
  });
  it('should render two AmountInputs', () => {
    const wrapper = mount(<Calculator store={store} />);
    expect(wrapper.find(AmountInput)).to.have.length(2);
  });
  it('should change the value of the first currency selector', () => {
    const wrapper = mount(<Calculator store={store} />);
    const currencySelectorIn = wrapper.find('#currency-selector-in');
    store.dispatch(currentCurrSet({ in: 'GPB', out: 'USD' }));
    expect(currencySelectorIn.props().defaultValue).to.not.equal('PLN');
    store.dispatch(currentCurrSet({ in: 'PLN', out: 'USD' }));
    expect(currencySelectorIn.props().defaultValue).to.equal('PLN');
  });
  it('should change the value of the first amount input', () => {
    const wrapper = mount(<Calculator store={store} />);
    const amountSelectorIn = wrapper.find('#amount-input-in');
    store.dispatch(currentAmSet({ in: 1234, out: 1 }));
    expect(amountSelectorIn.props().value).to.not.equal(5678);
    store.dispatch(currentAmSet({ in: 5678, out: 1 }));
    expect(amountSelectorIn.props().value).to.equal(5678);
  });
});
