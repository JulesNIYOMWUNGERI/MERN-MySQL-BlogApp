import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Home from './components/home/Home';
import PostDetails from './components/Details/PostDetails';
import Form from './components/form/Form';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'


const Layout = () => {
  return( 
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Post/:id",
        element:<PostDetails/>
      },
      {
        path:"/form",
        element:<Form/>
      }
    ]
  },
  {
    path: "/Auth",
    element: <Auth/>
  },
]);


function App() {
  return (
    <div className='flex justify-center'>
      <div className='w-[1024px]'>
         <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
