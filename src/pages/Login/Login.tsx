import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from 'components';
import { LoginFormValues } from 'types/forms';
import { Heading } from 'assets';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {};

  return (
    <div
      id='login-page'
      className=' w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] flex justify-center items-center'
    >
      <form
        id='login-form'
        className='w-96 h-2/5 bg-[linear-gradient(180deg,_#345161_0%,_#7B5A5A_100%)] border border-white rounded-sm pt-11 pl-12 pr-12 flex flex-col items-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <img src={Heading} alt='' />
        <Input
          type='text'
          className='w-full h-14 bg-[#C4B6B2] mt-10 outline-none pl-5 placeholder-[#501C1C]'
          label='username'
          id='username'
          placeholder='მეტსახელი'
          register={register}
          validation={{
            required: 'მეტსახელის ველი არ არის შევსებული',
            minLength: {
              value: 3,
              message: 'მეტსახელი უნდა შეიცავდეს მინიმუმ სამ სიმბოლოს',
            },
            pattern: {
              value: /^[a-zა-ჰ0-9]{3,}$/,
              message:
                'მეტსახელი უნდა შედგებოდეს დაბალი რეგისტრის ასოებისგან და ციფრებისგან',
            },
          }}
        />
        <div className='mt-1 text-[#CC1E1E] h-5 ml-5 flex gap-3'>
          {errors.username && errors.username.message}
        </div>
        <Input
          type='password'
          className='w-full h-14 bg-[#C4B6B2] outline-none pl-5 placeholder-[#501C1C]'
          label='password'
          id='password'
          placeholder='პაროლი'
          register={register}
          validation={{
            required: 'პაროლის ველი არ არის შევსებული',
            minLength: {
              value: 3,
              message: 'პაროლი უნდა შეიცავდეს მინიმუმ სამ სიმბოლოს',
            },
          }}
        />
      </form>
    </div>
  );
};

export default Login;
