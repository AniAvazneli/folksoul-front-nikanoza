import { Card, InfoHeader, Menu, Modal } from 'components';
import {
  AddMusicianImg,
  Musician,
  MusicianDelete,
  MusicianDetails,
} from 'pages/Musicians/components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MusicianFormValues } from 'types/forms';

const Musicians = () => {
  const [imageCangeModal, setImageChangeModal] = useState<boolean>(false);
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const closeImageChangeModal = () => {
    setImageChangeModal(false);
  };

  const openImageChangeModal = () => {
    setImageChangeModal(true);
  };

  const closeDetailModal = () => {
    setDetailModal(false);
  };

  const openDetailModal = () => {
    setDetailModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const array = [1, 2, 3, 4, 5, 6];
  const itemsPerPage = 3;

  const paginationHandler = (index: number) => {};
  const page = 1;

  const musicianObj: MusicianFormValues = {
    name: 'ნიკა',
    instrument: 'ფლეიტა',
    orbitLength: '500',
    color: '#F2F2F2',
    biography:
      'დავიბადე დავიბადე დავიბადე დავიბადე დავიბადე დავიბადე დავიბადე დავიბადე დავიბადე',
  };

  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>ჯგუფის წევრები</InfoHeader>
        <div className='flex w-full gap-x-20 mt-24 h-1/3 justify-center'>
          <Musician
            className=' w-1/6 h-full'
            openImgModal={openImageChangeModal}
            openDetailModal={openDetailModal}
            openDeleteModal={openDeleteModal}
          ></Musician>
          <Musician
            className=' w-1/6 h-full'
            openImgModal={openImageChangeModal}
            openDetailModal={openDetailModal}
            openDeleteModal={openDeleteModal}
          ></Musician>
          <Musician
            className=' w-1/6 h-full'
            openImgModal={openImageChangeModal}
            openDetailModal={openDetailModal}
            openDeleteModal={openDeleteModal}
          ></Musician>
        </div>
        <div className='w-full flex justify-center gap-x-6 mt-32'>
          {array.map((item, index) => {
            return index % itemsPerPage === 0 ? (
              <div
                className={`w-5 h-5 rounded-full cursor-pointer ${
                  index / itemsPerPage === page - 1
                    ? 'bg-[#444444]'
                    : 'bg-[#c4c4c4]'
                }`}
                key={index}
                onClick={() => {
                  paginationHandler(index);
                }}
              ></div>
            ) : (
              ''
            );
          })}
        </div>
        <Link
          to={'/musicians/new'}
          className='justify-self-center mt-24 font-ninoMtavruli text-[#3A7DA3] text-lg underline'
        >
          ახალი წევრი გვყავს?
        </Link>
      </Card>
      {imageCangeModal && (
        <Modal close={closeImageChangeModal}>
          <AddMusicianImg close={closeImageChangeModal} />
        </Modal>
      )}
      {detailModal && (
        <Modal close={closeDetailModal}>
          <MusicianDetails close={closeDetailModal} musician={musicianObj} />
        </Modal>
      )}
      {deleteModal && (
        <Modal close={closeDeleteModal}>
          <MusicianDelete close={closeDeleteModal} musician={musicianObj} />
        </Modal>
      )}
    </div>
  );
};

export default Musicians;
