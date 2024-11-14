import './App.css';
import  Home  from './Pages/Home';
import  About  from './Pages/About';
import  Construction  from './Pages/Construction';
import Layout from './Components/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <Layout /> , 
      children:[
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/construction", element: <Construction /> }
        ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}>
 
      </RouterProvider>

    </>
  )
}

export default App
