import { Camera, Member } from 'assets';
import { useNavigate } from 'react-router-dom';
import { CircleBtn } from 'svg';
import { member } from 'types';

const Musician: React.FC<{
  className: string;
  openImgModal: (index: number) => void;
  memberIndex: number;
  openDetailModal: (index: number) => void;
  openDeleteModal: (index: number) => void;
  singer: member;
}> = (props) => {
  const navigate = useNavigate();
  const editMusicianHandler = () => {
    navigate('/musicians/edit/' + props.singer.id);
  };
  return (
    <div
      className={
        props.className +
        ' bg-[#333333] border border-black rounded-[3px] shadow-[5px_5px_13px_rgba(0,_0,_0,_0.63)] flex flex-col items-center relative'
      }
    >
      <img
        src={props.singer.avatar ? props.singer.avatar : Member}
        alt=''
        className='w-36 h-36 mt-7 border rounded-full'
      />
      <div
        id='image-change-box'
        className='absolute w-10 h-10 flex items-center justify-center border-2 border-white bg-[#C4C4C4] rounded-full left-32 top-32'
      >
        <img
          src={Camera}
          alt=''
          onClick={() => props.openImgModal(props.memberIndex)}
        />
      </div>
      <span className='mt-5 font-ninoMtavruli text-white text-lg'>
        {props.singer.name}
      </span>
      <div
        id='panel-box'
        className='mt-3 w-full h-10 flex justify-around items-center border-t border-black shadow-[5px_5px_13px_rgba(0,_0,_0,_0.63)]'
      >
        <CircleBtn
          color='#88D06F'
          onClick={() => props.openDetailModal(props.memberIndex)}
        />
        <CircleBtn color='#F2C94C' onClick={editMusicianHandler} />
        <CircleBtn
          color='#EB5757'
          onClick={() => props.openDeleteModal(props.memberIndex)}
        />
      </div>
    </div>
  );
};

export default Musician;
