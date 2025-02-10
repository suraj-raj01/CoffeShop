import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Arabica from './Categories/Arabica'
import Robusta from './Categories/Robusta'
import Baurbon from './Categories/Baurbon'
import Essential from './Categories/Essential'
import BlackCoffee from './Categories/BlackCoffee'
import ColdCoffee from './Categories/ColdCoffee'
import Insert from './Pages/Insert'
import SaveItems from './Pages/SaveItems'
import OrderDetails from './Pages/OrderDetails'
import Payment from './Pages/Payment'
import Login from './Login/Login'
import Register from './Login/Register'
import AdminDashboard from './Admin/AdminDashboard'
import UserActivity from './Admin/UserActivity'
import RecentActivity from './Admin/RecentActivity'
import UserDashboard from './UserDashboard/UserDashboard'
import SaveItemPayment from './Pages/SaveItemPayment'
import Search from './Pages/Search'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}>
              <Route index element={<Arabica/>}/>
              <Route path='arabica' element={<Arabica/>}/>
              <Route path='robusta' element={<Robusta/>}/>
              <Route path='bourbon' element={<Baurbon/>}/>
              <Route path='assential' element={<Essential/>}/>
              <Route path='blackcoffee' element={<BlackCoffee/>}/>
              <Route path='coldcoffee' element={<ColdCoffee/>}/>
            </Route>
            <Route path='about' element={<About/>}/>
            <Route path='service' element={<Service/>}/>
            <Route path='saveitem' element={<SaveItems/>}/>
            <Route path='orderdetails/:id' element={<OrderDetails/>}/>
            <Route path='payment/:id' element={<Payment/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='admindashboard' element={<AdminDashboard/>}>
              <Route index element={<Insert/>}/>
              <Route path='insert' element={<Insert/>}/>
              <Route path='useractivity' element={<UserActivity/>}/>
              <Route path='recentactivity' element={<RecentActivity/>}/>
            </Route>
            <Route path='userdashboard' element={<UserDashboard/>}/>
            <Route path='saveitempayment' element={<SaveItemPayment/>}/>
            <Route path='search' element={<Search/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
