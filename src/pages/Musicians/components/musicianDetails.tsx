import { Close, YouTube } from 'assets';
import { Button, InfoHeader } from 'components';
import { MusicianFormValues } from 'types';

const MusicianDetails: React.FC<{
  close: () => void;
  musician: MusicianFormValues;
}> = (props) => {
  const closeModalHandler = () => {
    props.close();
  };

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
      <InfoHeader>{`${props.musician.name} ~ ${props.musician.instrument}`}</InfoHeader>
      <div className='overflow-y-auto flex flex-col items-center'>
        <img
          src={YouTube}
          alt=''
          className=' w-32 h-32 rounded-full border-2 border-white shadow-[2px_4px_14px_#000000] mt-8'
        />
        <p className='mt-4'>
          ორბიტალური დაშორება: {props.musician.orbitLength}
        </p>
        <p className='text-justify w-9/12 text-base mt-4 h-52'>
          {props.musician.biography}
        </p>
      </div>
    </div>
  );
};

export default MusicianDetails;
