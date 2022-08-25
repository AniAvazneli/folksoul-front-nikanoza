import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input } from 'components';
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
        className='w-96 h-3/5 bg-[linear-gradient(180deg,_#345161_0%,_#7B5A5A_100%)] border border-white rounded-sm pt-8 pl-12 pr-12 pb-14 flex flex-col items-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <img src={Heading} alt='' />
        <Input
          type='text'
          className='w-full h-14 bg-[#C4B6B2] mt-7 outline-none pl-5 placeholder-[#501C1C]'
          label='username'
          id='username'
          placeholder='მეტსახელი'
          register={register}
          validation={{
            required: 'მეტსახელის ველი ცარიელია*',
            minLength: {
              value: 3,
              message: 'მეტსახელი უნდა შეიცავდეს მინიმუმ სამ სიმბოლოს*',
            },
            pattern: {
              value: /^[a-zა-ჰ0-9]{3,}$/,
              message:
                'მეტსახელი უნდა შედგებოდეს დაბალი რეგისტრის ასოებისგან და ციფრებისგან*',
            },
          }}
        />
        <div className='mt-1 text-[#ec3030] font-ninoMtavruli h-10 ml-5 flex gap-3'>
          {errors.username && errors.username.message}
        </div>
        <Input
          type='password'
          className='w-full h-14 bg-[#C4B6B2] mt-11 outline-none pl-5 placeholder-[#501C1C]'
          label='password'
          id='password'
          placeholder='პაროლი'
          register={register}
          validation={{
            required: 'პაროლის ველი ცარიელია*',
            minLength: {
              value: 3,
              message: 'პაროლი უნდა შეიცავდეს მინიმუმ სამ სიმბოლოს*',
            },
          }}
        />
        <div className='mt-1 text-[#ec3030] h-10 ml-5 flex gap-3'>
          {errors.password && errors.password.message}
        </div>
        <Button
          className='outline-none bg-[#345161] w-56 h-14 text-white border border-white rounded-sm mt-auto'
          id='sign-up-btn'
          type='submit'
        >
          შემობრძანდი
        </Button>
      </form>
    </div>
  );
};

export default Login;
