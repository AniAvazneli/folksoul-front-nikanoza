import { Card, InfoHeader, Menu } from 'components';
import { Musician } from 'pages/Musicians/components';

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const Musicians = () => (
  <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
    <Menu />
    <Card>
      <InfoHeader className='mt-16'>ჯგუფის წევრები</InfoHeader>
      <div className='flex w-full gap-x-20 mt-24 h-1/3 justify-center'>
        <Musician className=' w-1/6 h-full'></Musician>
        <Musician className=' w-1/6 h-full'></Musician>
        <Musician className=' w-1/6 h-full'></Musician>
      </div>
      <div
        id='pagination'
        className='mt-28 w-full flex justify-center gap-x-5'
      >
        {}
      </div>
    </Card>
  </div>
);

export default Musicians;
