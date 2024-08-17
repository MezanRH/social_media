
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Registration from './pages/registration'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/login';
import NotLoggedinUser from './privateRouter/NotLoggedinUser';
import LoggedinUser from './privateRouter/LoggedinUser';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route element={<LoggedinUser/>}>
     <Route path='/' element={<Home/>}/>
     </Route>
     <Route element={<NotLoggedinUser/>}>
     <Route path='/registration' element={<Registration/>}/>
     <Route path='/login' element={<Login/>}/>
     </Route>
    </Route>
  )
);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
