import React from 'react'
import Community_Header from '../Components/Community/Community_Header'
import Community_Breadcrumb from '../Components/Community/Community_Breadcrumb'
import Newsletter from '../Components/Home/Newsletter'
import Header from '../Components/Home/Header'

const Community = () => {
  return (
    <div>
        <Header />
        <Community_Breadcrumb />
        <Community_Header />
        <Newsletter/> 
    </div>
  )
}

export default Community