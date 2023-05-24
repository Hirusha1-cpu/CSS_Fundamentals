// import './main.css'
import './Shared.css'
import './App.css';
import './Packages.css'
import Packages from './Components/Packages';
import Home from './Components/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Components/Nav';

const router = createBrowserRouter([

  {
    path:'/nav',
    element:<Nav/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path: 'packages',
    element: <Packages />
  },
 
 
])

function App() {
  return (
    <div>


      <RouterProvider router={router} />

    </div>
    
  );
}

export default App;
