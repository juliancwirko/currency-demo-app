import React from 'react';
import cssModules from 'react-css-modules';
import style from './amount-input.css';

const AmountInput = (props) => {
  const { value, onChange, readOnly, id } = props;
  return (
    <div>
      <input
        styleName="amount-input"
        type="text"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        id={id}
      />
    </div>
  );
};

AmountInput.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func,
  readOnly: React.PropTypes.bool,
  id: React.PropTypes.string,
};

export default cssModules(AmountInput, style);
