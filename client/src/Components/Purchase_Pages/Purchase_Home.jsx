import React from 'react'
import Billing_Breadcrumb from '../Billing_Components/Billing_Breadcrumb'
import Billing_Header from '../Billing_Components/Billing_Header'
import Header from '../Home/Header'
import Purchase_Header from '../Purchase_Components/Purchase_Header'

const Purchase_Home = () => {
  return (
    <div>
        <Header/>
        <Billing_Breadcrumb/>
        <Purchase_Header/>
    </div>
  )
}

export default Purchase_Home