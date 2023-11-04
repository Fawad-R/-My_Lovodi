import React from 'react'
import Dashboard_Nav from '../Dashboard/Components/Navbar/Dashboard_Nav'
import User_Panel_Header from '../Components/User_Panel/User_Panel_Header'
import Dashboard_Breadcrumb from './Dashboard_Breadcrumb'
import Header from '../Components/Home/Header'

const Dashboard_MyProfile = () => {
  return (
    <div>
        <Dashboard_Breadcrumb />
        <Header />
        <Dashboard_Nav />
        <div>
        <User_Panel_Header/>
        </div>
    </div>
  )
}

export default Dashboard_MyProfile