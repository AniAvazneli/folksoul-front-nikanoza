import React from 'react';
import { InputComponent } from 'types/components';

const Input: React.FC<InputComponent> = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      autoComplete='on'
      id={props.id}
      {...props.register(props.label, {
        ...props.validation,
        onChange: props.onChange,
      })}
      hidden={props.hidden}
    />
  );
};

export default Input;
