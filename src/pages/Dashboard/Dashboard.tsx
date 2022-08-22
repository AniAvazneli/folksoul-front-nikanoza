import { Satellite, TvFeet, YouTube } from 'assets';
import { Card, Menu } from 'components';

const Dashboard = () => (
  <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
    <Menu />
    <Card>
      <h1 className='mt-36 font-ninoMtavruli text-5xl'>დილამშვიდობისა!</h1>
      <div
        id='logo-box'
        className='mt-28 flex flex-col items-center w-2/5 h-1/2'
      >
        <img src={Satellite} alt='' className='w-32 h-28 relative z-10' />
        <div className='w-full h-3/4 border-[21px] border-black drop-shadow-[10px_10px_14px_#939191]'>
          <img src={YouTube} alt='' className='w-full h-full' />
        </div>
        <img src={TvFeet} alt='' className='relative' />
      </div>
    </Card>
  </div>
);

export default Dashboard;
