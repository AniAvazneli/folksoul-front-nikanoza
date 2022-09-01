import { Card, InfoHeader, Menu } from 'components';
import LinkForm from 'components/LinkForm';
import { LinkFormValues } from 'types';

const EditLink = () => {
  const link: LinkFormValues = {
    name: 'Corporation',
    link: 'Corporation.ge',
  };
  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>დაამატე სოციალური ბმული</InfoHeader>
        <LinkForm link={link} />
      </Card>
    </div>
  );
};

export default EditLink;
