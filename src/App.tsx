import {
  About,
  Dashboard,
  EditBand,
  EditMusician,
  Home,
  Links,
  Login,
  Musicians,
  NewLink,
  NewMusician,
} from 'pages';
import EditLink from 'pages/EditLink';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchBandInfo } from 'store';
import { useAppDispatch } from 'store';
import { fetchMembers } from 'store/actions/members-actions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBandInfo());
    dispatch(fetchMembers());
  }, [dispatch]);
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/musicians' element={<Musicians />} />
        <Route path='/musicians/new' element={<NewMusician />} />
        <Route path='/musicians/edit/:id' element={<EditMusician />} />
        <Route path='/links' element={<Links />} />
        <Route path='/links/new' element={<NewLink />} />
        <Route path='/links/edit/:id' element={<EditLink />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/edit' element={<EditBand />} />
      </Routes>
    </div>
  );
}

export default App;
