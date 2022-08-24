import React, { ReactNode, useRef } from 'react';

const Modal: React.FC<{ children: ReactNode; close: () => void }> = (props) => {
  const backdrop = useRef<HTMLDivElement>(null);

  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === backdrop.current) {
      props.close();
    }
  };
  return (
    <div
      className='w-full h-full absolute bg-[#042639] opacity-[0.97] flex justify-center items-center'
      ref={backdrop}
      onClick={closeModalHandler}
    >
      <div className='w-1/3 h-3/5 bg-[#FBFBFB] rounded-lg'>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
