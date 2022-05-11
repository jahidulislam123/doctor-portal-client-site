
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Home/Shared/Footer';
import Home from './Pages/Home/Shared/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
