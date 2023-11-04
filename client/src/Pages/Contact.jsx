import React from 'react'
import Contact_Breadcrumb from '../Components/Contact/Contact_Breadcrumb'
import Contact_Header from '../Components/Contact/Contact_Header'
import Newsletter from '../Components/Home/Newsletter'
import Header from '../Components/Home/Header'

const Contact = () => {
  return (
    <div>
        <Header/>
        <Contact_Breadcrumb/>
        <Contact_Header/>
        <Newsletter/>
    </div>
  )
}

export default Contact