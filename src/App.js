import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Login from './Pages/Auth/Login/Login';
import Home from './Pages/Home/Home';
import Signup from './Pages/Auth/Signup/Signup';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import Cart from './Pages/Cart/Cart';
import { useState } from 'react';
import Swal from 'sweetalert2';
import RequireAuth from './Pages/Auth/ReqireAuth/RequireAuth';
import ProceedCheckout from './Pages/ProceedCheckout/ProceedCheckout';
function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (item) =>{
    console.log(item);
    let isPresent = false;
    cart.forEach(product => {
      if(item.id === product.id){
        isPresent = true;
      }
    });
    if(isPresent){
      Swal.fire({
        title: "This item already added",
        text: "You have already added this item before",
        icon: "error"
      });
      return;
    }
   setCart([...cart, item]);
  }
  const handleRemoveItem = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };
  return (
    <div>
      <Header cart={cart}></Header>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} handleClick={handleClick}></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleRemoveItem={handleRemoveItem}></Cart>}></Route>
    
        <Route path='/proceedcheckout' element={
          <RequireAuth>
            <ProceedCheckout></ProceedCheckout>
          </RequireAuth>
        }></Route>
      
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
 