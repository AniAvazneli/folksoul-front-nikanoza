import { Camera, YouTube } from 'assets';
import { useNavigate } from 'react-router-dom';
import { CircleBtn } from 'svg';
import { link } from 'types';

const LinkComponent: React.FC<{
  linkObj: link;
  openDeleteModal: (index: number) => void;
  openImgUploadModal: (index: number) => void;
}> = (props) => {
  const navigate = useNavigate();
  return (
    <div className='w-3/5 p-4 shadow-[2px_4px_14px_#000000] bg-[#333333] border border-black rounded-md flex'>
      <div id='img-and-title' className='w-1/3 flex justify-around relative'>
        <img
          src={
            props.linkObj.logo
              ? process.env.REACT_APP_ROOT_URL + props.linkObj.logo
              : YouTube
          }
          alt=''
          className=''
        />
        <span className='font-ninoMtavruli text-lg text-white tracking-widest'>
          {props.linkObj.name}
        </span>
        <button
          id='image-change-box'
          className='absolute w-5 h-5 flex items-center justify-center border-2 border-white bg-[#C4C4C4] rounded-full left-16 top-4'
        >
          <img
            src={Camera}
            alt=''
            onClick={() => props.openImgUploadModal(props.linkObj.id)}
          />
        </button>
      </div>
      <a
        href={props.linkObj.link}
        target='_blank'
        className='text-base text-[#2F80ED] underline'
        rel='noreferrer'
      >
        {props.linkObj.link}
      </a>
      <div id='link-btns' className='ml-auto flex gap-x-14'>
        <CircleBtn
          color='#F2C94C'
          onClick={() => navigate('/links/edit/' + props.linkObj.id)}
        />
        <CircleBtn
          color='#EB5757'
          onClick={() => props.openDeleteModal(props.linkObj.id)}
        />
      </div>
    </div>
  );
};

export default LinkComponent;
