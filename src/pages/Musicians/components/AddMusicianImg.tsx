import { Close, YouTube } from 'assets';
import { Button, InfoHeader } from 'components';
import { useRef, useState } from 'react';
import { member } from 'types';

const AddMusicianImg: React.FC<{
  close: () => void;
  musician: member;
}> = (props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);

  const closeModalHandler = () => {
    props.close();
  };
  const uploadImageHandler = () => {
    imageInput.current?.click();
  };
  const fileChangeHandler = () => {
    setFileSelected(true);
  };

  const onSubmit = async () => {};

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
      <InfoHeader>შეცვალე ჯგუფის წევრის ავატარი</InfoHeader>
      <img
        src={YouTube}
        alt=''
        className='w-56 h-56 rounded-full mt-20 border-2 border-white shadow-[2px_4px_14px_#000000]'
      />
      <input
        placeholder='image'
        id='musician-avatar-input'
        className=''
        type='file'
        onChange={fileChangeHandler}
        hidden={true}
        ref={imageInput}
      />
      {!fileSelected && (
        <Button
          id='img-upload-btn'
          onClick={uploadImageHandler}
          className='w-40 h-10 bg-[#143B52] rounded-md mt-20 font-ninoMtavruli text-white text-lg'
          type='button'
        >
          ატვირთე
        </Button>
      )}
      {fileSelected && (
        <Button
          id='musician-img-sent'
          className='w-40 h-10 bg-[#53C02C] rounded-md mt-20 font-ninoMtavruli text-white text-lg'
          type='button'
          onClick={onSubmit}
        >
          ატვირთე
        </Button>
      )}
    </div>
  );
};

export default AddMusicianImg;
