import { ReactNode } from 'react';

const InfoHeader: React.FC<{ children: ReactNode; className?: string }> = (
  props
) => (
  <div
    className={
      'w-3/4 h-14 flex justify-center items-center font-ninoMtavruli text-lg border-b border-black ' +
      props.className
    }
  >
    {props.children}
  </div>
);

export default InfoHeader;
