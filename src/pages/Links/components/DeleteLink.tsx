import { Close } from 'assets';
import { Button, InfoHeader } from 'components';
import { getCookie } from 'react-use-cookie';
import { deleteSocialLink } from 'services';
import { linksActions, useAppDispatch } from 'store';
import { link } from 'types';

const DeleteLink: React.FC<{
  close: () => void;
  link: link;
}> = (props) => {
  const token = getCookie('token');
  const dispatch = useAppDispatch();
  const closeModalHandler = () => {
    props.close();
  };

  const linkDeleteHandler = async () => {
    try {
      await deleteSocialLink({ id: props.link.id, token });
      dispatch(linksActions.deleteLink(props.link.id));
      props.close();
    } catch (error) {}
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
      <InfoHeader>გსურთ {props.link.name} - ის წაშლა?</InfoHeader>
      <div className='flex gap-10 mt-24'>
        <Button
          className='w-40 h-10 bg-[#EB5757] rounded-md mt-20 font-ninoMtavruli text-white text-lg'
          id='link-del-btn'
          type='button'
          onClick={linkDeleteHandler}
        >
          წაშლა
        </Button>
      </div>
    </div>
  );
};

export default DeleteLink;
