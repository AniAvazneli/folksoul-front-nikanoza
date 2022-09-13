import { Close, YouTube } from 'assets';
import { Button, InfoHeader } from 'components';
import { useRef, useState } from 'react';
import { getCookie } from 'react-use-cookie';
import { addLinkLogo, updateLinkLogo } from 'services';
import { fetchLinks, useAppDispatch } from 'store';
import { link } from 'types';

const AddLinkImg: React.FC<{ close: () => void; link: link }> = (props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const token = getCookie('token');
  const dispatch = useAppDispatch();

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
    formData.append(
      'image',
      imageInput.current?.files ? imageInput.current?.files[0] : ''
    );
    if (props.link.logo) {
      try {
        await updateLinkLogo({ imageForm: formData, id: props.link.id, token });
        dispatch(fetchLinks());
        props.close();
      } catch (error) {
        setError(
          '*ფაილი არ შეესაბამება ფორმატს png,jpg,jpeg ან აღემატება დასაშვებ ზომას'
        );
      }
    } else {
      try {
        await addLinkLogo({ imageForm: formData, id: props.link.id, token });
        dispatch(fetchLinks());
        props.close();
      } catch (error) {
        setError(
          '*ფაილი არ შეესაბამება ფორმატს png,jpg,jpeg ან აღემატება დასაშვებ ზომას'
        );
      }
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
      <InfoHeader>შეცვალე სოციალური ბმულის ხატულა</InfoHeader>
      <span className='text-lg font-ninoMtavruli mt-16'>{props.link.name}</span>
      <img
        src={
          props.link.logo && !fileSelected
            ? process.env.REACT_APP_ROOT_URL + props.link.logo
            : fileSelected && imageInput.current?.files
            ? URL.createObjectURL(imageInput.current?.files[0])
            : YouTube
        }
        alt=''
        className='h-36 mt-16'
      />
      <div className='mt-3 text-[#ec3030] font-ninoMtavruli w-1/2 h-10 ml-5 flex gap-3'>
        {error}
      </div>
      <input
        placeholder='image'
        id='link-avatar-input'
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
          className='w-40 h-10 bg-[#143B52] rounded-md mt-3 font-ninoMtavruli text-white text-lg'
          type='button'
        >
          ატვირთე
        </Button>
      )}
      {fileSelected && (
        <Button
          id='link-img-sent'
          className='w-40 h-10 bg-[#53C02C] rounded-md mt-7 font-ninoMtavruli text-white text-lg'
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
