import React from 'react'
import Membership_Breadcrumb from '../Components/Membership/Membership_Breadcrumb'
import Header from '../Components/Home/Header'
import Memebership_Header from '../Components/Membership/Memebership_Header'
import Membership_Faq from '../Components/Membership/Membership_Faq'
import Newsletter from '../Components/Home/Newsletter'

const Membership = () => {
  return (
    <div>
        <Header/>
        <Membership_Breadcrumb/>
        <Memebership_Header/>
        <Membership_Faq/>
        <Newsletter/>
    </div>
  )
}

export default Membership