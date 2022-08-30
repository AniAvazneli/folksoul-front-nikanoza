import { Card, InfoHeader, Menu, MusicianForm } from 'components';

const EditMusician = () => {
  const obj = {
    name: 'ნიკა',
    instrument: 'ფლეიტა',
    orbitLength: '300',
    color: '#FFF23F',
    biography: 'დავიბადე',
  };

  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>
          ჯგუფის წევრის ინფორმაციის ცვლილება
        </InfoHeader>
        <MusicianForm musician={obj} />
      </Card>
    </div>
  );
};

export default EditMusician;
