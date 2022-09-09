import { Card, InfoHeader, Menu, Modal } from 'components';
import {
  AddMusicianImg,
  Musician,
  MusicianDelete,
  MusicianDetails,
} from 'pages/Musicians/components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';

const Musicians = () => {
  const [imageCangeModal, setImageChangeModal] = useState<boolean>(false);
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [membersPage, setMembersPage] = useState<number>(0);
  const [memberIndex, setMemberIndex] = useState<number | null>(null);

  const members = useAppSelector((state) => state.members.members);
  const itemsPerPage = 3;

  const closeImageChangeModal = () => {
    setImageChangeModal(false);
  };

  const openImageChangeModal = (index: number) => {
    setImageChangeModal(true);
    setMemberIndex(index);
  };

  const closeDetailModal = () => {
    setDetailModal(false);
  };

  const openDetailModal = (index: number) => {
    setDetailModal(true);
    setMemberIndex(index);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const openDeleteModal = (index: number) => {
    setDeleteModal(true);
    setMemberIndex(index);
  };

  const paginationHandler = (index: number) => {
    setMembersPage(index / itemsPerPage);
  };
  const page = 1;

  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>ჯგუფის წევრები</InfoHeader>
        <div className='flex w-full gap-x-20 mt-24 h-1/3 justify-center'>
          {members.length > 0 && (
            <Musician
              className=' w-1/6 h-full'
              openImgModal={openImageChangeModal}
              openDetailModal={openDetailModal}
              openDeleteModal={openDeleteModal}
              memberIndex={membersPage * itemsPerPage}
              singer={members[membersPage * itemsPerPage]}
            ></Musician>
          )}
          {members.length > 0 && members[membersPage * itemsPerPage + 1] && (
            <Musician
              className=' w-1/6 h-full'
              openImgModal={openImageChangeModal}
              openDetailModal={openDetailModal}
              openDeleteModal={openDeleteModal}
              memberIndex={membersPage * itemsPerPage + 1}
              singer={members[membersPage * itemsPerPage + 1]}
            ></Musician>
          )}
          {members.length > 0 && members[membersPage * itemsPerPage + 2] && (
            <Musician
              className=' w-1/6 h-full'
              openImgModal={openImageChangeModal}
              openDetailModal={openDetailModal}
              openDeleteModal={openDeleteModal}
              memberIndex={membersPage * itemsPerPage + 2}
              singer={members[membersPage * itemsPerPage + 2]}
            ></Musician>
          )}
        </div>
        <div className='w-full flex justify-center gap-x-6 mt-32'>
          {members.map((item, index) => {
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
          <AddMusicianImg
            close={closeImageChangeModal}
            musician={members[memberIndex || 0]}
          />
        </Modal>
      )}
      {detailModal && (
        <Modal close={closeDetailModal}>
          <MusicianDetails
            close={closeDetailModal}
            musician={members[memberIndex || 0]}
          />
        </Modal>
      )}
      {deleteModal && (
        <Modal close={closeDeleteModal}>
          <MusicianDelete
            close={closeDeleteModal}
            musician={members[memberIndex || 0]}
          />
        </Modal>
      )}
    </div>
  );
};

export default Musicians;
