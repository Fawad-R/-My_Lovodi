import React from 'react'
import Billing_Breadcrumb from '../Billing_Components/Billing_Breadcrumb'
import Billing_Header from '../Billing_Components/Billing_Header'
import Header from '../Home/Header'

const Billing_Home = () => {
  return (
    <div>
        <Header/>
        <Billing_Breadcrumb/>
        <Billing_Header/>
    </div>
  )
}

export default Billing_Home