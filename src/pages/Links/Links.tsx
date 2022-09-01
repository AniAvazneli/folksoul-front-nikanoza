import { Card, InfoHeader, Menu, Modal } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AddLinkImg, DeleteLink, LinkComponent } from './components';

const Links = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [imgUploadModal, setImgUploadModal] = useState<boolean>();

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeImgUploadModal = () => {
    setImgUploadModal(false);
  };

  const openImgUploadModal = () => {
    setImgUploadModal(true);
  };

  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>სოციალური ბმულები</InfoHeader>
        <ul
          className='mt-20 w-full flex flex-col items-center gap-y-14 h-1/2 overflow-y-auto mr-10'
          id='link-list'
        >
          {array.map((elem, index) => (
            <LinkComponent
              key={index}
              linkObj={{ name: 'works', link: 'blabla' }}
              openDeleteModal={openDeleteModal}
              openImgUploadModal={openImgUploadModal}
            />
          ))}
        </ul>
        <Link
          to={'/links/new'}
          className='font-ninoMtavruli text-[#3A7DA3] underline mt-20'
        >
          დაამატე ახალი სოციალური ბმული
        </Link>
      </Card>
      {deleteModal && (
        <Modal close={closeDeleteModal}>
          <DeleteLink
            link={{ name: 'Corporation', link: 'corporation.ge' }}
            close={closeDeleteModal}
          />
        </Modal>
      )}
      {imgUploadModal && (
        <Modal close={closeImgUploadModal}>
          <AddLinkImg
            close={closeImgUploadModal}
            link={{ name: 'Corporation', link: 'corporation.ge' }}
          />
        </Modal>
      )}
    </div>
  );
};

export default Links;
