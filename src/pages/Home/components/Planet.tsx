import { Twitter } from 'assets';

const Planet: React.FC<{
  className: string;
  stopAnimation: () => void;
}> = (props) => {
  const stopAnimationHandler = () => {
    props.stopAnimation();
  };
  return (
    <div
      className={
        `w-16 h-16 rounded-full border-2 border-[#F2C94C] bg-red-400 flex justify-center items-center relative top-1/2 -ml-8 -mt-8 cursor-pointer drop-shadow-[8px_8px_32px_#000000] ` +
        props.className
      }
      onClick={stopAnimationHandler}
    >
      <img src={Twitter} alt='' />
      <div className='w-16 h-6 border-4 border-[#F2C94C] bg-red-400 flex justify-center items-center absolute top-3/4 rounded-[50px]'>
        ნიკა
      </div>
    </div>
  );
};

export default Planet;
