
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Shared/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singUp' element={<SignUp></SignUp>}></Route>
        <Route path='/appoinment' element={<RequireAuth><Appoinment></Appoinment></RequireAuth>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
