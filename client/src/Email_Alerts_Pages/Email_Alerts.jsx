import React from 'react'
import Email_Alerts_Header from '../Email_Alerts_Components/Email_Alerts_Header'
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb'
import Header from '../Components/Home/Header'

const Email_Alerts = () => {
  return (
    <div>
        <Header/>
        <Dashboard_Breadcrumb/>
        <Email_Alerts_Header/>
    </div>
  )
}

export default Email_Alerts