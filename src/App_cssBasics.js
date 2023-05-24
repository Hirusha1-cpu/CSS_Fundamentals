import './Shared.css'
import './App.css';
import './Packages.css'

import Packages from './Components/Packages';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([

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
