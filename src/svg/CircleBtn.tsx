const CircleBtn: React.FC<{
  color: string;
  onClick: () => void;
  id: string;
}> = (props) => (
  <svg
    id={props.id}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='cursor-pointer'
    onClick={props.onClick}
  >
    <circle cx='12' cy='12' r='11.5' fill='black' stroke={props.color} />
    <circle cx='12' cy='12' r='6' fill={props.color} />
  </svg>
);

export default CircleBtn;
