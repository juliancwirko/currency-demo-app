import React from 'react';

const CurrencySelector = (props) => {
  const { currencies, onChange, value, id } = props;
  const options = () => currencies.map(
    (currency, index) => <option key={index} value={currency}>{currency}</option>
  );
  return (
    <div>
      <select
        className="form-control form-control-sm"
        onChange={onChange}
        defaultValue={value}
        id={id}
      >
        {options()}
      </select>
    </div>
  );
};

CurrencySelector.propTypes = {
  currencies: React.PropTypes.array.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  id: React.PropTypes.string,
};

export default CurrencySelector;
