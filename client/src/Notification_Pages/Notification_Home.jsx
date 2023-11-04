import React from 'react'
import Notification_Header from '../Notification_Components/Notification_Header'
import Header from '../Components/Home/Header'
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb'
import Notification_Navbar from '../Notification_Components/Notification_Navbar'

const Notification_Home = () => {
  return (
    <div>
        <Header/>
        <Dashboard_Breadcrumb/>
        {/* <Notification_Navbar/> */}
        <Notification_Header/>
    </div>
  )
}

export default Notification_Home