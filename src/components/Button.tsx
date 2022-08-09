import { ReactNode } from 'react';

const Button: React.FC<{
  type: 'button' | 'submit' | 'reset' | undefined;
  id: string;
  onClick?: () => void;
  className: string;
  children: ReactNode;
}> = (props) => {
  return (
    <button
      type={props.type}
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
