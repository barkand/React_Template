import React from "react";

import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";

const PhoneMaskCustom = React.forwardRef(function PhoneMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { value } })}
      overwrite
    />
  );
});

PhoneMaskCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const CodeMaskCustom = React.forwardRef(function CodeMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="0-0-0"
      inputRef={ref}
      onAccept={(value) => onChange({ target: { value } })}
      overwrite
    />
  );
});

CodeMaskCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export { PhoneMaskCustom, CodeMaskCustom };
