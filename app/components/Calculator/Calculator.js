import React from 'react';
import cssModules from 'react-css-modules';
import style from './calculator.css';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import AmountInput from '../AmountInput/AmountInput';
import { connect } from 'react-redux';
import { currentCurrSet, currentAmSet } from '../../redux/actions';
import { callCurrentAmSet } from '../../redux/async-actions';

const Calculator = (props) => {
  const {
    currentCurrencySet,
    currentAmountSet,
    dispatchCurrentCurrencySet,
    dispatchCurrentAmountSet,
    currencies,
    dispatchCallCurrentAmSet,
  } = props;
  const handleChangeCurrencyIn = (e) => {
    dispatchCurrentCurrencySet({
      in: e.currentTarget.value,
      out: currentCurrencySet.out,
    });
  };
  const handleChangeCurrencyOut = (e) => {
    dispatchCurrentCurrencySet({
      in: currentCurrencySet.in,
      out: e.currentTarget.value,
    });
  };
  const handleChangeAmountIn = (e) => {
    let currentVal = e.currentTarget.value;
    const regex = new RegExp(/^[0-9]|[0-9]{2,}$/);
    if (!currentVal || !regex.test(Number(currentVal))) {
      currentVal = 0;
    }
    dispatchCurrentAmountSet({
      in: parseFloat(currentVal, 10),
      out: currentAmountSet.out,
    });
  };
  const handleCalculate = () => {
    dispatchCallCurrentAmSet(currentAmountSet, currentCurrencySet);
  };
  return (
    <div>
      <h1 styleName="main-title" className="text-xs-center">Currency I have:</h1>
      <div className="row flex-items-sm-middle">
        <div className="col-sm-5 text-xs-center">
          <CurrencySelector
            currencies={currencies}
            value={currentCurrencySet.in}
            onChange={handleChangeCurrencyIn}
            id="currency-selector-in"
          />
          <AmountInput
            id="amount-input-in"
            value={currentAmountSet.in}
            onChange={handleChangeAmountIn}
          />
        </div>
        <div className="col-sm-2 text-xs-center">
          <i className="fa fa-caret-left" styleName="carrets-icons"></i>
          <i className="fa fa-caret-right" styleName="carrets-icons"></i>
        </div>
        <div className="col-sm-5 text-xs-center">
          <CurrencySelector
            currencies={currencies}
            value={currentCurrencySet.out}
            onChange={handleChangeCurrencyOut}
            id="currency-selector-out"
          />
          <AmountInput
            id="amount-input-out"
            value={currentAmountSet.out}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-xs-center">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            styleName="calculate-button"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
        <div className="col-sm-12 text-xs-center">
          <small>Actual data from: http://fixer.io/</small>
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  currentCurrencySet: React.PropTypes.object.isRequired,
  currencies: React.PropTypes.array.isRequired,
  currentAmountSet: React.PropTypes.object.isRequired,
  dispatchCurrentCurrencySet: React.PropTypes.func.isRequired,
  dispatchCurrentAmountSet: React.PropTypes.func.isRequired,
  dispatchCallCurrentAmSet: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCurrencySet: state.currentCurrencySet,
  currentAmountSet: state.currentAmountSet,
  currencies: state.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentCurrencySet: set => dispatch(currentCurrSet(set)),
  dispatchCurrentAmountSet: set => dispatch(currentAmSet(set)),
  dispatchCallCurrentAmSet: (amountSet, currencySet) => dispatch(
    callCurrentAmSet(amountSet, currencySet)
  ),
});


export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Calculator, style));
