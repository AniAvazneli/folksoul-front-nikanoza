import { Fb, Logo, Twitter, YouTube } from 'assets';

const Home = () => {
  return (
    <div
      id='main-page'
      className='w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] pl-[73px] pr-[92px] pt-6 pb-[78px]'
    >
      <header id='header' className='w-full flex justify-between items-center'>
        <img src={Logo} alt='' />
        <button
          id='login-btn'
          className='text-base text-[#FBFBFB] font-ninoMtavruli tracking-wide'
        >
          შესვლა
        </button>
      </header>
      <section
        id='animation-and-info'
        className='h-5/6 w-full pt-11 flex justify-between items-center'
      >
        <div id='solar-system'></div>
        <div className='w-5/12 h-5/6 mt-48'>
          <div id='info' className='w-full bg-[#FBD560] h-full rounded-[20px]'>
            <div id='info-top' className='flex justify-between'>
              <div
                id='circle-sm'
                className='w-4 h-4 bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] rounded-full mt-4 ml-5'
              ></div>
              <div
                id='image-box'
                className='w-80 h-80 rounded-full border border-[solid #FFFFFF] -mt-40 bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] drop-shadow-[2px_4px_14px_#000000] flex justify-center items-center'
              >
                <img src={Logo} alt='' className='w-64 h-32' />
              </div>
              <div
                id='circle-sm'
                className='w-4 h-4 bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] rounded-full mt-4 mr-5'
              ></div>
            </div>
            <p
              id='info-text'
              className='font-arial pl-16 mr-10 pr-10 mt-9 text-lg text-justify overflow-y-auto max-h-96'
            ></p>
          </div>
          <div className='h-9 mt-6 flex justify-center gap-x-12'>
            <img src={Fb} alt='' />
            <img src={YouTube} alt='' />
            <img src={Twitter} alt='' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
