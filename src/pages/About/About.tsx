import { Camera, Edit, YouTube } from 'assets';
import { Button, Card, InfoHeader, Menu, Modal } from 'components';
import { LogoChangeModal } from 'pages/About/components';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [logoCangeModal, setLogoChangeModal] = useState<boolean>(false);

  const closeLogoChangeModal = () => {
    setLogoChangeModal(false);
  };

  const openLogoChangeModal = () => {
    setLogoChangeModal(true);
  };

  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>ბენდის შესახებ</InfoHeader>
        <div className='flex w-full items-center gap-x-14 h-2/3 mt-8'>
          <Link
            id='edit-img-box'
            to={'/about/edit'}
            className='w-14 h-14 border border-[#3B5495] rounded-full bg-[#C4C4C4] flex justify-center items-center ml-14 mt-48'
          >
            <img src={Edit} alt='' className='w-8 h-7 ml-2' />
          </Link>

          <div
            id='band-info-box'
            className='flex flex-col items-center w-4/5 h-full overflow-y-auto pr-20'
          >
            <div
              id='band-logo-box'
              className='w-52 h-52 border-[#3B5495] border-[6.5px] rounded-full drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] relative'
            >
              <img
                src={YouTube}
                alt=''
                className='w-full h-full rounded-full'
              />
              <Button
                id='band-logo-edit-btn'
                type='button'
                onClick={openLogoChangeModal}
                className='absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#C4C4C4] border-2 border-[#FBFBFB] flex justify-center items-center shadow-[2px_3px_12px_#000000]'
              >
                <img src={Camera} alt='' className='w-8' />
              </Button>
            </div>
            <p
              id='band-info'
              className='w-full h-1/2 text-justify font-arial text-base leading-6 mt-12'
            ></p>
          </div>
        </div>
      </Card>
      {logoCangeModal && (
        <Modal close={closeLogoChangeModal}>
          <LogoChangeModal close={closeLogoChangeModal} />
        </Modal>
      )}
    </div>
  );
};

export default About;
