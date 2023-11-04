import React from 'react'
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb'
import Header from '../Components/Home/Header'
import Inbox_Navbar from './Inbox_Navbar'
import Card4 from '../Cards/Card4'
import Inbox_Sidebar from './Inbox_Sidebar'

const Requested_Messages = () => {
  return (
    <div>
      <Dashboard_Breadcrumb />
      <Header />
      <Inbox_Navbar />
      <div style={{ display: 'flex',justifyContent:'center',margin:'1%' }}>
        <Inbox_Sidebar />
        <div>
          <Card4 />
          <Card4 />
          <Card4 />
          <Card4 />
        </div>
      </div>
    </div>
  )
}

export default Requested_Messages