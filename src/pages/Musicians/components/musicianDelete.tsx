import { Close } from 'assets';
import { Button, InfoHeader } from 'components';
import { member } from 'types';

const MusicianDelete: React.FC<{
  close: () => void;
  musician: member;
}> = (props) => {
  const closeModalHandler = () => {
    props.close();
  };

  const musicianDeleteHandler = () => {};

  return (
    <div className='flex flex-col items-center p-4'>
      <Button
        id='close-add-modal-btn'
        onClick={closeModalHandler}
        className='ml-auto'
        type='button'
      >
        <img src={Close} alt='' />
      </Button>
      <InfoHeader>გსურთ წევრის წაშლა?</InfoHeader>
      <div className='flex gap-10 mt-24'>
        <Button
          className='w-40 h-10 bg-[#EB5757] rounded-md mt-20 font-ninoMtavruli text-white text-lg'
          id='musician-del-btn'
          type='button'
          onClick={musicianDeleteHandler}
        >
          წაშლა
        </Button>
      </div>
    </div>
  );
};

export default MusicianDelete;
