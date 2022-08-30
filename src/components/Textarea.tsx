import { TextareaComponent } from 'types/components';

const Textarea: React.FC<TextareaComponent> = (props) => (
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
    defaultValue={props.defaultValue || ''}
  ></textarea>
);

export default Textarea;
