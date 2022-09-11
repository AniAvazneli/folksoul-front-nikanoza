import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import { addNewLink, updateSocialLink } from 'services';
import { linksActions, useAppDispatch, useAppSelector } from 'store';
import { link, LinkFormValues } from 'types';
import Button from './Button';
import Input from './Input';

const LinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LinkFormValues>();

  const { id } = useParams();
  const socialLinks = useAppSelector((state) => state.links.links);
  const dispatch = useAppDispatch();
  const link = socialLinks.find((elem) => (id ? elem.id === +id : null));
  const token = getCookie('token');
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LinkFormValues> = async (data) => {
    const lastLink = socialLinks[socialLinks.length - 1];
    const newLink: link = {
      ...data,
      id: lastLink ? lastLink.id + 1 : 1,
      logo: '',
    };

    const updateLink: link = {
      ...data,
      id: link?.id || 0,
      logo: link?.logo || '',
    };
    if (link && token) {
      try {
        await updateSocialLink({ link: { ...data }, id: id ? +id : 0, token });
        dispatch(linksActions.updateLink(updateLink));
        navigate('/links');
      } catch (error) {
        const errorObj = error.response.data[0];
        const label = errorObj.context.label;
        const errorText = errorObj.message;
        setError(label, {
          type: 'custom',
          message: '*' + errorText,
        });
      }
    } else {
      try {
        await addNewLink({ link: data, token });
        dispatch(linksActions.addNewLink(newLink));
        navigate('/links');
      } catch (error) {
        const errorObj = error.response.data[0];
        const label = errorObj.context.label;
        const errorText = errorObj.message;
        setError(label, {
          type: 'custom',
          message: '*' + errorText,
        });
      }
    }
  };

  return (
    <form
      className='mt-auto mb-auto flex flex-col w-full justify-center items-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={`w-64 h-14 border rounded-md text-center ${
          errors.name ? 'border-[#ec3030]' : 'border-[#143B52]'
        }`}
        label='name'
        placeholder='დასახელება'
        id='link-form-name'
        type='text'
        register={register}
        validation={{}}
        defaultValue={link ? link.name : ''}
      />
      <div className='h-9 flex text-[#ec3030] font-ninoMtavruli justify-center items-center'>
        {errors.name && errors.name.message}
      </div>
      <Input
        className={`w-2/5 h-14 mt-3 border rounded-md text-center ${
          errors.link ? 'border-[#ec3030]' : 'border-[#143B52]'
        }`}
        label='link'
        placeholder='ბმული'
        id='link-form-link'
        type='text'
        register={register}
        validation={{}}
        defaultValue={link ? link.link : ''}
      />
      <div className='h-9 flex text-[#ec3030] font-ninoMtavruli justify-center items-center'>
        {errors.link && errors.link.message}
      </div>
      <Button
        id='add-musician-btn'
        type='submit'
        className='w-72 h-12 mt-14 flex justify-center items-center font-ninoMtavruli text-lg text-white bg-[#143B52] rounded-md'
      >
        {link ? 'ცვლილებების შენახვა' : 'დაამატე სოციალური ბმული'}
      </Button>
      <Link
        to={'/links'}
        id='back-musician-btn'
        type='button'
        className='mt-10 font-ninoMtavruli font-bold text-lg text-[#3A7DA3] underline'
      >
        გადი უკან
      </Link>
    </form>
  );
};

export default LinkForm;
