import React from "react"
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from "../Layout"
import Home from "../components/Home/Home"
import Appoinments from "../components/Appoinments/Appoinments"
import GymCalendar from "../components/GymCalendar/GymCalendar"
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/en-Tnt-gym-Assignment/' element={<Layout/>}>
        <Route path='/en-Tnt-gym-Assignment/' element={<Home/>}></Route>
        <Route path='/en-Tnt-gym-Assignment/Appointment' element={<Appoinments/>}></Route>
        <Route path='/en-Tnt-gym-Assignment/Calendar' element={<GymCalendar/>}></Route>
      </Route>
    )
)
export default router
