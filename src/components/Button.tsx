const Button: React.FC<{
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  id: string;
  onClick?: () => void;
  className: string;
}> = (props) => {
  return (
    <button
      type={props.type}
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
