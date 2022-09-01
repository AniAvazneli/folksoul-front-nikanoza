import { ButtonComponent } from 'types';

const Button: React.FC<ButtonComponent> = (props) => {
  return (
    <button
      type={props.type}
      id={props.id}
      form={props.form}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
