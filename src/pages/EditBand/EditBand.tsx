import { Card, InfoHeader, Menu, Textarea, Button } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';

const EditBand = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ about: string }>();

  const band = useAppSelector((state) => state.band.band);

  const onSubmit: SubmitHandler<{ about: string }> = async (data) => {};
  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>ბენდის შესახებ - დაარედაქტირე</InfoHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-3/4 h-3/4 mt-10 flex flex-col items-center'
        >
          <div
            id='textarea-box'
            className='w-full h-5/6 bg-[#E5E5E5] pt-4 pr-9 pb-4 pl-6 rounded-xl shadow-[2px_4px_14px_#000000]'
          >
            <Textarea
              label='about'
              placeholder='ბენდის შესახებ ...'
              id='abount-band-textarea'
              className='w-full h-full bg-transparent text-justify font-arial text-base pr-14 resize-none border-none outline-none'
              register={register}
              validation={{
                required: '*ინფორმაცია არ უნდა იყოს ცარიელი',
                pattern: {
                  value: /^[ა–ჰ0-9\W]{100,}$/,
                  message: '*ინფორმაცია უნდა შეიცავდეს მხოლოდ ქართულ ასოებს',
                },
                minLength: {
                  value: 100,
                  message:
                    '*ბენდის ინფორმაცია უნდა შედგებოდეს მინიმუმ 100 სიმბოლოსგან',
                },
              }}
              defaultValue={band.description}
            />
          </div>
          <div className='h-9 flex text-[#ec3030] font-ninoMtavruli justify-center items-center'>
            {errors.about && errors.about.message}
          </div>
          <Button
            id='bend-info-sent'
            className='w-40 h-10 bg-[#53C02C] rounded-md mb-auto font-ninoMtavruli text-white text-lg'
            type='submit'
          >
            შეინახე
          </Button>
        </form>
        <Link
          to={'/about'}
          id='back-about'
          type='button'
          className='font-ninoMtavruli font-bold text-lg text-[#3A7DA3] underline mb-8'
        >
          გადი უკან
        </Link>
      </Card>
    </div>
  );
};

export default EditBand;
