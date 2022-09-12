import { Door, Home, Member, Note, YouTube } from 'assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setCookie } from 'react-use-cookie';
import { getCookie } from 'react-use-cookie';
import Button from './Button';
import { useEffect } from 'react';
import { fetchLinks, useAppDispatch } from 'store';

const Menu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = getCookie('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  const onLogout = () => {
    setCookie('token', '');
    navigate('/');
  };

  const linkStyle = (path: string) =>
    `w-full h-12 font-ninoMtavruli flex  items-center text-lg ${
      pathname.includes(path)
        ? 'bg-[#FBFBFB] text-[#143B52]'
        : 'bg-transparent text-[#FBFBFB]'
    }`;
  return (
    <div className='w-1/6 pt-20 pb-20 bg-[#333333] border-t border-r border-b rounded-tr-xl rounded-br-xl border-[#898989]'>
      <ul className='flex flex-col gap-10'>
        <Link to={'/dashboard'} className={linkStyle('dashboard')}>
          <img src={Home} alt='' className='w-6 ml-7' />
          <span className='ml-6 flex mt-1'>მთავარი</span>
        </Link>
        <Link to={'/musicians'} className={linkStyle('musicians')}>
          <img src={Member} alt='' className='w-6 ml-7' />
          <span className='ml-6 flex mt-1'>ჯგუფის წევრები</span>
        </Link>
        <Link to={'/links'} className={linkStyle('links')}>
          <img src={YouTube} alt='' className='w-6 ml-7' />
          <span className='ml-6 flex mt-1'>სოციალური ბმულები</span>
        </Link>
        <Link to={'/about'} className={linkStyle('about')}>
          <img src={Note} alt='' className='w-6 ml-7' />
          <span className='ml-6 flex mt-1'>ბენდის შესახებ</span>
        </Link>
        <Button
          type='button'
          id='logout-btn'
          className={linkStyle('*')}
          onClick={onLogout}
        >
          <img src={Door} alt='' className='w-6 ml-7' />
          <span className='ml-6 flex mt-1'>გადი გარეთ</span>
        </Button>
      </ul>
    </div>
  );
};

export default Menu;
