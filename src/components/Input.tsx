import React from 'react';
import { UseFormRegister } from 'react-hook-form';

const Input: React.FC<{
  label: string;
  placeholder: string;
  id: string;
  className: string;
  type: string;
  register: UseFormRegister<any>;
  validation: object;
  onChange?: () => void;
  reference?: React.RefObject<HTMLInputElement>;
  hidden?: boolean | undefined;
}> = (props) => {
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
