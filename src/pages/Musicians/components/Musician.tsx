import { Camera, YouTube } from 'assets';
import { useNavigate } from 'react-router-dom';
import { CircleBtn } from 'svg';

const Musician: React.FC<{
  className: string;
  openImgModal: () => void;
  openDetailModal: () => void;
  openDeleteModal: () => void;
}> = (props) => {
  const navigate = useNavigate();
  const editMusicianHandler = () => {
    navigate('/musicians/edit/2');
  };
  return (
    <div
      className={
        props.className +
        ' bg-[#333333] border border-black rounded-[3px] shadow-[5px_5px_13px_rgba(0,_0,_0,_0.63)] flex flex-col items-center relative'
      }
    >
      <img
        src={YouTube}
        alt=''
        className='w-36 h-36 mt-7 border rounded-full'
      />
      <div
        id='image-change-box'
        className='absolute w-10 h-10 flex items-center justify-center border-2 border-white bg-[#C4C4C4] rounded-full left-32 top-32'
      >
        <img src={Camera} alt='' onClick={props.openImgModal} />
      </div>
      <span className='mt-5 font-ninoMtavruli text-white text-lg'>
        წევრის სახელი
      </span>
      <div
        id='panel-box'
        className='mt-3 w-full h-10 flex justify-around items-center border-t border-black shadow-[5px_5px_13px_rgba(0,_0,_0,_0.63)]'
      >
        <CircleBtn color='#88D06F' onClick={props.openDetailModal} />
        <CircleBtn color='#F2C94C' onClick={editMusicianHandler} />
        <CircleBtn color='#EB5757' onClick={props.openDeleteModal} />
      </div>
    </div>
  );
};

export default Musician;
