import { Fb, Logo, Member, NoteAnimation, Sun, Twitter, YouTube } from 'assets';
import { Link } from 'react-router-dom';
import { Planet } from 'pages/Home/components';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'store';
import { member } from 'types';

const Home = () => {
  const [animationStage, setAnimationStage] = useState<boolean>(true);
  const [clickedSinger, setClickedSinger] = useState<member | null>(null);
  const [textInfo, setTextInfo] = useState<string>('');

  const band = useAppSelector((state) => state.band.band);
  const members = useAppSelector((state) => state.members.members);
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    setTextInfo(band.description);
  }, [band.description]);

  const stopAnimation = (singer: member) => {
    setAnimationStage(false);
    setTextInfo(singer.biography);
    setClickedSinger(singer);
  };

  const continueAnimation = () => {
    setAnimationStage(true);
    setTextInfo(band.description);
    setClickedSinger(null);
  };

  return (
    <div
      id='main-page'
      className='w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] pl-[73px] pr-[92px] pt-6 pb-[78px]'
    >
      <header id='header' className='w-full flex justify-between items-center'>
        <img src={Logo} alt='' />
        <Link
          to={token ? '/dashboard' : '/login'}
          id='login-btn'
          className='text-base text-[#FBFBFB] font-ninoMtavruli tracking-wide'
        >
          შესვლა
        </Link>
      </header>
      <section
        id='animation-and-info'
        className='h-5/6 w-full pt-11 flex justify-between items-center'
      >
        <div
          id='solar-system'
          className=' w-1/2 h-full mt-10 flex justify-center items-center'
        >
          <div
            id='sun-box'
            className={`rounded-full relative z-[1000] animate-[pulsation_0.3s_infinite] cursor-pointer ${
              !animationStage ? 'pause' : ''
            } `}
            onClick={continueAnimation}
          >
            <img src={Sun} alt='' />
            <img
              src={NoteAnimation}
              alt=''
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[zoom_0.5s_infinite] ${
                !animationStage ? 'pause' : ''
              }`}
            />
          </div>
          {members.length &&
            members.map((member, index) => (
              <div
                id={'member-' + member.id}
                key={index}
                className={`absolute border-2 border-dashed border-[#F2C94C] rounded-full animate-[orbit_6s_linear_infinite]  ${
                  !animationStage ? 'pause' : ''
                }`}
                style={{
                  width: member.orbitLength + 'px',
                  height: member.orbitLength + 'px',
                  zIndex: 800 - member.orbitLength,
                  animationDelay: 100 / member.orbitLength + 's',
                  animationDuration: 3000 / member.orbitLength + 's',
                }}
              >
                <Planet
                  className={`animate-[orbitMinus_6s_linear_infinite] ${
                    !animationStage ? 'pause' : ''
                  }`}
                  key={'member-' + member.id + '-' + index}
                  stopAnimation={stopAnimation}
                  singer={member}
                  clickedSinger={clickedSinger}
                />
              </div>
            ))}
        </div>
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
                <img
                  src={
                    clickedSinger && clickedSinger.avatar
                      ? process.env.REACT_APP_ROOT_URL + clickedSinger.avatar
                      : clickedSinger
                      ? Member
                      : Logo
                  }
                  alt=''
                  className='w-64 h-32'
                />
              </div>
              <div
                id='circle-sm'
                className='w-4 h-4 bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] rounded-full mt-4 mr-5'
              ></div>
            </div>
            <p
              id='info-text'
              className='font-arial pl-16 mr-10 pr-10 mt-9 text-lg text-justify overflow-y-auto max-h-80'
            >
              {textInfo}
            </p>
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
