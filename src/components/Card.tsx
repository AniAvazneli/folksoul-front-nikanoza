import { ReactNode } from 'react';

const Card: React.FC<{ children: ReactNode }> = (props) => (
  <div className='w-2/3 h-4/5 bg-[#FBFBFB] shadow-[inset_4px_4px_20px_#4D4D4D] rounded-[20px] ml-36 flex flex-col items-center'>
    {props.children}
  </div>
);

export default Card;
