
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Shared/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequreAdmin from './Pages/Login/RequreAdmin';



function App() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='singUp' element={<SignUp></SignUp>}></Route>
        <Route path='appoinment' element={<RequireAuth><Appoinment></Appoinment></RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
           <Route index element={<MyAppoinment></MyAppoinment>}></Route>
           <Route path='review' element={<MyReview></MyReview>}></Route>
           <Route path='history' element={<MyHistory></MyHistory>}></Route>
           <Route path='users' element={<RequreAdmin>< Users></ Users></RequreAdmin>}></Route>
           
           
           </Route>
      </Routes>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
