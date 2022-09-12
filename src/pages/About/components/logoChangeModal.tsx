import { Close } from 'assets';
import { Button, InfoHeader } from 'components';
import { useRef, useState } from 'react';
import { getCookie } from 'react-use-cookie';
import { updateBandLogo } from 'services';
import { fetchBandInfo, useAppDispatch, useAppSelector } from 'store';

const LogoChangeModal: React.FC<{ close: () => void }> = (props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const band = useAppSelector((state) => state.band.band);
  const dispatch = useAppDispatch();
  const token = getCookie('token');

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
    const formData = new FormData();
    formData.append('description', band.description);
    formData.append('name', band.name);
    formData.append(
      'logo',
      imageInput.current?.files ? imageInput.current?.files[0] : ''
    );
    try {
      await updateBandLogo({ form: formData, token });
      dispatch(fetchBandInfo());
      props.close();
    } catch (error) {
      setError(
        '*ფაილი არ შეესაბამება ფორმატს png,jpg,jpeg ან აღემატება დასაშვებ ზომას'
      );
    }
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
      <InfoHeader>შეცვალე ბენდის პორტრეტი</InfoHeader>
      <img
        src={
          !fileSelected
            ? process.env.REACT_APP_ROOT_URL + band.logo
            : imageInput.current?.files
            ? URL.createObjectURL(imageInput.current?.files[0])
            : ''
        }
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
      <div className='mt-3 text-[#ec3030] font-ninoMtavruli w-1/2 h-10 ml-5 flex gap-3'>
        {error}
      </div>
      {!fileSelected && (
        <Button
          id='img-upload-btn'
          onClick={uploadImageHandler}
          className='w-40 h-10 bg-[#143B52] rounded-md mt-7 font-ninoMtavruli text-white text-lg'
          type='button'
        >
          ატვირთე
        </Button>
      )}
      {fileSelected && (
        <Button
          id='musician-img-sent'
          className='w-40 h-10 bg-[#53C02C] rounded-md mt-7 font-ninoMtavruli text-white text-lg'
          type='button'
          onClick={onSubmit}
        >
          ატვირთე
        </Button>
      )}
    </div>
  );
};

export default LogoChangeModal;
