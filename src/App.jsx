
import './App.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Login from './Component/Login';
import Layout from './Component/Admin/Layout';
import AdminView from './Component/Admin/AdminView';
import AdminHome from './Component/Admin/AdminHome';
import AdminEdit from './Component/Admin/AdminEdit'

// stafffffffffffffffffffff
import StaffLayout from './Component/staff/StaffLayout';
import StaffEdit from './Component/staff/StaffEdit';
import StaffHome from './Component/staff/StaffHome';
import StaffView from './Component/staff/StaffView';
// userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
import UserEdit from './Component/User/UserEdit';
import UserHome from './Component/User/UserHome';
import UserLayout from './Component/User/UserLayout';
import UserView from './Component/User/UserView';
function App() {

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Layout' element={<Layout/>}/>
    <Route path='/AdminView' element={<AdminView/>}/>
    <Route path='/AdminHome' element={<AdminHome/>}/>
    <Route path='/AdminEdit/:id' element={<AdminEdit/>}/>
    <Route path='/StaffLayout' element={<StaffLayout/>}/>
    <Route path='/StaffEdit/:id' element={<StaffEdit/>}/>
    <Route path='/StaffHome' element={<StaffHome/>}/>
    <Route path='/StaffView' element={<StaffView/>}/>
    <Route path='/UserEdit/:id' element={<UserEdit/>}/>
    <Route path='/UserHome' element={<UserHome/>}/>
    <Route path='/UserLayout' element={<UserLayout/>}/>
    <Route path='/UserView' element={<UserView/>}/>





  </Routes>
</BrowserRouter>


    </>
  )
}

export default App
