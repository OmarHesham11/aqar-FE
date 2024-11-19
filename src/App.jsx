// import './App.css';
import  Home  from './Pages/Home';
import  About  from './Pages/About';
import  Construction  from './Pages/Construction';

import Layout from './Components/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OurDevelopments from './Pages/OurDevelopments';


function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <Layout /> , 
      children:[
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/construction", element: <Construction /> },
          { path: "/developments", element: <OurDevelopments /> }
        ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
