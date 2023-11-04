import React from 'react'
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb'
import Header from '../Components/Home/Header'
import Inbox_Navbar from './Inbox_Navbar'
import Card6 from '../Cards/Card6'
import Inbox_Sidebar from './Inbox_Sidebar'

const Sent_Messages = () => {
  return (
    <div>
      <Dashboard_Breadcrumb />
      <Header />
      <Inbox_Navbar />
      <div style={{ display: 'flex',justifyContent:'center',margin:'1%' }}>
        <Inbox_Sidebar />
        <div>
          <Card6 />
          <Card6 />
          <Card6 />
          <Card6 />
        </div>
      </div>
    </div>
  )
}

export default Sent_Messages