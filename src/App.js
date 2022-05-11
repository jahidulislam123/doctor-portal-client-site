
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Shared/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
