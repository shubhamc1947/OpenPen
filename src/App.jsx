import './Style.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import WriteBlog from './pages/WriteBlog/WriteBlog';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import PageNotFound from './pages/404/PageNotFound';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

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
        path: "/singleblog/:id",
        element: <SingleBlog/>,
      },
      {
        path: "/writeblog/",
        element: <WriteBlog/>,
      }    
    ]
  },
  {
    path: "login",
    element: <Login/>,
  },
  
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "*",
    element: <PageNotFound/>,
  },
]);


function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


function Layout(){
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
