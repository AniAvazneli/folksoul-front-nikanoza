import { Button, Card, InfoHeader, Menu, Modal } from 'components';
import { AddMusician, Musician } from 'pages/Musicians/components';

const array = [1, 2, 3, 4, 5, 6];
const itemsPerPage = 3;

const paginationHandler = (index: number) => {};
const page = 1;

const addMusicianHandler = () => {};

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
      <div className='w-full flex justify-center gap-x-6 mt-32'>
        {array.map((item, index) => {
          return index % itemsPerPage === 0 ? (
            <div
              className={`w-5 h-5 rounded-full cursor-pointer ${
                index / itemsPerPage === page - 1
                  ? 'bg-[#444444]'
                  : 'bg-[#c4c4c4]'
              }`}
              key={index}
              onClick={() => {
                paginationHandler(index);
              }}
            ></div>
          ) : (
            ''
          );
        })}
      </div>
      <Button
        type='button'
        onClick={addMusicianHandler}
        id='add-musician-btn'
        className='justify-self-center mt-24 font-ninoMtavruli text-[#3A7DA3] text-lg underline'
      >
        ახალი წევრი გვყავს?
      </Button>
    </Card>
    <Modal>
      <AddMusician />
    </Modal>
  </div>
);

export default Musicians;
