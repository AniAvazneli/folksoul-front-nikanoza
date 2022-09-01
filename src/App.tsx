import {
  About,
  Dashboard,
  EditMusician,
  Home,
  Links,
  Login,
  Musicians,
  NewLink,
  NewMusician,
} from 'pages';
import EditLink from 'pages/EditLink';
import { Route, Routes } from 'react-router-dom';

function App() {
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
        <Route path='/links/edit' element={<EditLink />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
