import { ReactNode } from 'react';

const Modal: React.FC<{ children: ReactNode }> = (props) => (
  <div className='w-full h-full absolute bg-[#042639] opacity-[0.97] flex justify-center items-center'>
    <div className='w-1/3 h-3/5 bg-[#FBFBFB] rounded-lg'>{props.children}</div>
  </div>
);

export default Modal;
