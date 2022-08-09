import { Home, Login } from 'pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
