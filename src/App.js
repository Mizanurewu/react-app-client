import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';

function App() {
  return (
    <div className='lg:max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
