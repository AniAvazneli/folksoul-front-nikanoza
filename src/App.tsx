import {
  About,
  Dashboard,
  Home,
  Links,
  Login,
  Musicians,
  NewMusician,
} from 'pages';
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
        <Route path='/links' element={<Links />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
