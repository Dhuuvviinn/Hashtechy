import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from "./Pages/CartPage/Cart"
import AllProducts from "./Pages/AllProduct/AllProducts"
import Login from './Pages/login/Login'
function App() {

  // if (see Login) {
  //   do authentication False
  // } else{
  //   do true
  // }

  const [authentication, setAuthentication] = useState(true)

  return (
    <>
   
    <BrowserRouter>
    {
authentication ?
   <Routes>
      <Route path='/' element={<Header authentication={authentication}/>}>
         <Route path="/" element={<AllProducts/>}/>
         <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
    :
    <Login/>
    }
    </BrowserRouter>
    </>
  )
}

export default App
