import React from 'react'
import Community_Single_Breadcrumb from '../Components/Community_Single/Community_Single_Breadcrumb'
import Header from '../Components/Home/Header'
import Community_Single_Header from '../Components/Community_Single/Community_Single_Header'
import Community_Single_Profile from '../Components/Community_Single/Community_Single_Profile'
import Newsletter from '../Components/Home/Newsletter'

const Community_Single = () => {
  return (
    <div>
        <Header/>
        <Community_Single_Breadcrumb/>
        <Community_Single_Header/>
        <Community_Single_Profile/>
        <Newsletter/>
    </div>
  )
}

export default Community_Single