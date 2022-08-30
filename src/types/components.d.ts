import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

export type ButtonComponent = {
  type: 'button' | 'submit' | 'reset' | undefined;
  id: string;
  form?: string | undefined;
  onClick?: () => void;
  className: string;
  children: ReactNode;
};

export type InputComponent = {
  label: string;
  placeholder: string;
  id: string;
  className: string;
  type: string;
  register: UseFormRegister<any>;
  validation: object;
  onChange?: () => void;
  hidden?: boolean | undefined;
  defaultValue?: string;
};

export type TextareaComponent = {
  label: string;
  placeholder: string;
  id: string;
  className: string;
  register: UseFormRegister<any>;
  validation: object;
  onChange?: () => void;
  hidden?: boolean | undefined;
  defaultValue?: string;
};
