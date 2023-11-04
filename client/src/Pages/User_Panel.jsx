import React from 'react'
import Header from '../Components/Home/Header'
import User_Panel_Header from '../Components/User_Panel/User_Panel_Header'
import User_Panel_Breadcrumb from '../Components/User_Panel/User_Panel_Breadcrumb'
import Newsletter from '../Components/Home/Newsletter'

const User_Panel = () => {
  return (
    <div>
        <Header/>
        <User_Panel_Breadcrumb/>
        <User_Panel_Header/>
        <Newsletter/>
    </div>
  )
}

export default User_Panel