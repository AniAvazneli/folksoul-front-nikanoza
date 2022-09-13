import { Card, InfoHeader, Menu, Modal } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';
import { AddLinkImg, DeleteLink, LinkComponent } from './components';

const Links = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [imgUploadModal, setImgUploadModal] = useState<boolean>();
  const [linkIndex, setLinkIndex] = useState<number | null>(null);

  const socialLinks = useAppSelector((state) => state.links.links);

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const openDeleteModal = (index: number) => {
    setDeleteModal(true);
    setLinkIndex(index);
  };

  const closeImgUploadModal = () => {
    setImgUploadModal(false);
  };

  const openImgUploadModal = (index: number) => {
    setImgUploadModal(true);
    setLinkIndex(index);
  };

  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>სოციალური ბმულები</InfoHeader>
        <ul
          className='mt-20 w-full flex flex-col items-center gap-y-14 h-1/2 overflow-y-auto mr-10'
          id='link-list'
        >
          {socialLinks.length > 0 &&
            socialLinks.map((link, index) => (
              <LinkComponent
                key={index}
                linkObj={link}
                linkIndex={index}
                openDeleteModal={openDeleteModal}
                openImgUploadModal={openImgUploadModal}
              />
            ))}
        </ul>
        <Link
          id='add-links-btn'
          to={'/links/new'}
          className='font-ninoMtavruli text-[#3A7DA3] underline mt-20'
        >
          დაამატე ახალი სოციალური ბმული
        </Link>
      </Card>
      {deleteModal && (
        <Modal close={closeDeleteModal}>
          <DeleteLink
            link={socialLinks[linkIndex || 0]}
            close={closeDeleteModal}
          />
        </Modal>
      )}
      {imgUploadModal && (
        <Modal close={closeImgUploadModal}>
          <AddLinkImg
            close={closeImgUploadModal}
            link={socialLinks[linkIndex || 0]}
          />
        </Modal>
      )}
    </div>
  );
};

export default Links;
