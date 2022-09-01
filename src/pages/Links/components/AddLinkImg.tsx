import { Close, YouTube } from 'assets';
import { Button, InfoHeader } from 'components';
import { useRef, useState } from 'react';
import { LinkFormValues } from 'types/forms';

const AddLinkImg: React.FC<{ close: () => void; link: LinkFormValues }> = (
  props
) => {
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

  const onSubmit = async () => {
    const file = imageInput.current?.files
      ? imageInput.current?.files[0]
      : undefined;

    console.log(file);
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
      <InfoHeader>შეცვალე სოციალური ბმულის ხატულა</InfoHeader>
      <span className='text-lg font-ninoMtavruli mt-16'>{props.link.name}</span>
      <img src={YouTube} alt='' className='w-56 mt-16' />
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
          className='w-40 h-10 bg-[#143B52] rounded-md mt-16 font-ninoMtavruli text-white text-lg'
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
          შეინახე
        </Button>
      )}
    </div>
  );
};

export default AddLinkImg;
