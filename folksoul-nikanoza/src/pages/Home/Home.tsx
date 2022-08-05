import { Logo } from 'assets';

const Home = () => {
  return (
    <div
      id='main-page'
      className='w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] pl-[73px] pr-[92px] pt-6'
    >
      <header id='header' className='w-full flex justify-between items-center'>
        <img src={Logo} alt='' />
        <button
          id='login-btn'
          className='text-base text-[#FBFBFB] font-ninoMtavruli italic tracking-wide'
        >
          შესვლა
        </button>
      </header>
      
    </div>
  );
};

export default Home;
