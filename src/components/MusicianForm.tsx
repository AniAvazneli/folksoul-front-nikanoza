import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import { addNewMember, updateMember } from 'services';
import { membersActions, useAppDispatch, useAppSelector } from 'store';
import { member, MusicianFormValues } from 'types';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

const MusicianForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<MusicianFormValues>();

  const { id } = useParams();
  const members = useAppSelector((state) => state.members.members);
  const dispatch = useAppDispatch();
  const token = getCookie('token');
  const member = members.find((singer) => (id ? singer.id === +id : null));
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<MusicianFormValues> = async (data) => {
    const refactorData = { ...data, orbitLength: +data.orbitLength };
    const lastMember = members[members.length - 1];
    const newMember: member = {
      ...refactorData,
      id: lastMember ? lastMember.id + 1 : 1,
      avatar: '',
    };
    const updatedMember = {
      ...refactorData,
      id: member?.id || 0,
      avatar: member?.avatar || '',
    };
    if (member && token) {
      try {
        await updateMember({
          member: refactorData,
          id: id ? +id : 0,
          token,
        });
        dispatch(membersActions.updateMember(updatedMember));
        navigate('/musicians');
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
        await addNewMember({ member: refactorData, token });
        dispatch(membersActions.addMember(newMember));
        navigate('/musicians');
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
      className='mt-24 w-full flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label='name'
        placeholder='მუსიკოსის სახელი'
        id='new-musician-name'
        className={`w-64 h-14 border rounded-md text-center ${
          errors.name ? 'border-[#ec3030]' : 'border-[#143B52]'
        }`}
        type='text'
        register={register}
        validation={{
          required: '*სახელის ველი არ უნდა იყოს ცარიელი',
          minLength: {
            value: 3,
            message: '*სახელი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს',
          },
          pattern: {
            value: /^[ა-ჰ]{3,}$/,
            message: '*სახელი უნდა შეიცავდეს მხოლოდ ქართულ ასოებს',
          },
        }}
        defaultValue={member ? member?.name : ''}
      />
      <div className='h-9 flex text-[#ec3030] font-ninoMtavruli justify-center items-center'>
        {errors.name && errors.name.message}
      </div>
      <div id='middle-form' className='flex gap-x-8'>
        <Input
          label='instrument'
          placeholder='ინსტრუმენტი'
          id='new-musician-instrument'
          className={`w-40 h-14 border rounded-md text-center ${
            errors.instrument ? 'border-[#ec3030]' : 'border-[#143B52]'
          }`}
          type='text'
          register={register}
          validation={{
            required: '*ინსტრუმრნტის ველი არ უნდა იყოს ცარიელი',
            minLength: {
              value: 3,
              message: '*ისტრუმენტის ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
            },
            pattern: {
              value: /^[ა-ჰ]{2,}$/,
              message: '*სახელი უნდა შეიცავდეს მხოლოდ ქართულ ასოებს',
            },
          }}
          defaultValue={member ? member.instrument : ''}
        />
        <Input
          label='orbitLength'
          placeholder='ორბიტის სიგრძე'
          id='new-musician-instrument'
          className={`w-40 h-14 border rounded-md text-center ${
            errors.orbitLength ? 'border-[#ec3030]' : 'border-[#143B52]'
          }`}
          type='text'
          register={register}
          validation={{
            required: '*აირჩიე ორბიტის სიგრძე',
            pattern: {
              value: /^[0-9]{1,}$/,
              message: '*ორბიტის სიგრძე უნდა იყოს დადებითი რიცხვი',
            },
            validate: {
              min: (value: string) =>
                +value > 200 || 'ორბიტის სიგრძე უნდა იყოს 200ზე მეტი',
              max: (value: string) =>
                +value < 800 || 'ორბიტის სიგრძე უნდა იყოს 800ზე ნაკლები',
            },
          }}
          defaultValue={member ? member.orbitLength.toString() : ''}
        />
        <Input
          label='color'
          placeholder='ფერი'
          id='new-musician-color'
          className={`w-40 h-14 border rounded-md text-center ${
            errors.color ? 'border-[#ec3030]' : 'border-[#143B52]'
          }`}
          type='text'
          register={register}
          validation={{
            required: '*ფერის ველი არ უნდა იყოს ცარიელი',
            pattern: {
              value: /^#[0-9A-Z]{6}$/,
              message: '*ფერი უნდა იყოს HEX ფორმატის',
            },
          }}
          defaultValue={member ? member.color : ''}
        />
      </div>
      <div className='p-2 flex flex-col text-[#ec3030] font-ninoMtavruli'>
        <p>{errors.instrument && errors.instrument.message}</p>
        <p>{errors.orbitLength && errors.orbitLength.message}</p>
        <p>{errors.color && errors.color.message}</p>
      </div>
      <Textarea
        label='biography'
        placeholder='მუსიკოსის შესახებ'
        id='new-musician-instrument'
        className={`w-1/2 h-60 p-3 resize-none border rounded-md ${
          errors.biography ? 'border-[#ec3030]' : 'border-[#143B52]'
        }`}
        register={register}
        validation={{
          required: '*ბიოგრაფია არ უნდა იყოს ცარიელი',
          pattern: {
            value: /^[ა–ჰ0-9\W]{2,}$/,
            message: '*ბიოგრაფია უნდა შეიცავდეს მხოლოდ ქართულ ასოებს',
          },
        }}
        defaultValue={member ? member.biography : ''}
      />
      <div className='h-9 flex text-[#ec3030] font-ninoMtavruli justify-center items-center'>
        {errors.biography && errors.biography.message}
      </div>
      <Button
        id='add-musician-btn'
        type='submit'
        className='w-52 h-12 flex justify-center items-center font-ninoMtavruli text-lg text-white bg-[#143B52]'
      >
        {member ? 'ცვლილებების შენახვა' : 'დაამატე წევრი'}
      </Button>
      <Link
        to={'/musicians'}
        id='back-musician-btn'
        type='button'
        className='mt-5 font-ninoMtavruli font-bold text-lg text-[#3A7DA3] underline'
      >
        გადი უკან
      </Link>
    </form>
  );
};

export default MusicianForm;
