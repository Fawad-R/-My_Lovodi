import React from 'react'
import Inbox_Navbar from '../Inbox_Components/Inbox_Navbar'
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb'
import Header from '../Components/Home/Header'
import Card4 from '../Cards/Card4'

const Inbox_Home = () => {
  return (
    <div>
      <Dashboard_Breadcrumb/>
      <Header/>
      <Inbox_Navbar/>
      <Card4/>
      </div>
  )
}

export default Inbox_Home