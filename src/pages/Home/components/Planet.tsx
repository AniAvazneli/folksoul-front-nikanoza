import { Twitter } from 'assets';

const Planet: React.FC<{ className: string }> = (props) => {
  return (
    <div
      className={
        `w-16 h-16 rounded-full border-2 border-[#F2C94C] bg-red-400 flex justify-center items-center relative top-1/2 -ml-8 -mt-8 cursor-pointer ` +
        props.className
      }
    >
      <img src={Twitter} alt='' />
      <div className='w-16 h-6 border-4 border-[#F2C94C] bg-red-400 flex justify-center items-center absolute top-3/4 rounded-[50px]'>
        ნიკა
      </div>
    </div>
  );
};

export default Planet;
