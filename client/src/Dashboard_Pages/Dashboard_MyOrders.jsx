import React from 'react'
import MyOrders_Breadcrumb from '../Dashboard/Components/MyOrders/MyOrders_Breadcrumb'
import MyOrders_Header from '../Dashboard/Components/MyOrders/MyOrders_Header'
import Newsletter from '../Components/Home/Newsletter'
import Header from '../Components/Home/Header'
import Dashboard_Nav from '../Dashboard/Components/Navbar/Dashboard_Nav'

const Dashboard_MyOrders = () => {
  return (
    <div>
      <Header/>
        <MyOrders_Breadcrumb/>
        <Dashboard_Nav/>
        <MyOrders_Header/>
        <Newsletter/>
    </div>
  )
}

export default Dashboard_MyOrders