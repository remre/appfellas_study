import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  required = false,
}) => (
  <div
    className={`input-field ${type === 'date' ? 'left-rounded' : 'right-rounded'}`}
  >
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {icon && <FontAwesomeIcon icon={icon} className="nav-icon" />}
  </div>
);

export default InputField;
