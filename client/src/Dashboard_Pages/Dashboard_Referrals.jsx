import React from 'react'
import Dashboard_Referrals_Header from '../Dashboard/Components/Referrals/Dashboard_Referrals_Header'
import Dashboard_Breadcrumb from './Dashboard_Breadcrumb'
import Dashboard_Nav from '../Dashboard/Components/Navbar/Dashboard_Nav'
import Header from '../Components/Home/Header'

const Dashboard_Referrals = () => {
  return (
    <div>
        <Dashboard_Breadcrumb/>
        <Header/>
        <Dashboard_Nav/>
        <Dashboard_Referrals_Header/>
    </div>
  )
}

export default Dashboard_Referrals