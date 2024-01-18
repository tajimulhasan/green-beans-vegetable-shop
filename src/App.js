import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Login from './Pages/Auth/Login/Login';
import Home from './Pages/Home/Home';
import Signup from './Pages/Auth/Signup/Signup';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import Cart from './Pages/Cart/Cart';
import LeafyVegetable from './Pages/Home/Leafy-vegetable/LeafyVegetable';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path=':leafyId' element={<LeafyVegetable></LeafyVegetable>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
 