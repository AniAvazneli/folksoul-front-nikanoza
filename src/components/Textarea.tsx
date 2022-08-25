import { UseFormRegister } from 'react-hook-form';

const Textarea: React.FC<{
  label: string;
  placeholder: string;
  id: string;
  className: string;
  register: UseFormRegister<any>;
  validation: object;
  onChange?: () => void;
  hidden?: boolean | undefined;
}> = (props) => (
  <textarea
    className={props.className}
    placeholder={props.placeholder}
    autoComplete='on'
    id={props.id}
    {...props.register(props.label, {
      ...props.validation,
      onChange: props.onChange,
    })}
    hidden={props.hidden}
  ></textarea>
);

export default Textarea;
