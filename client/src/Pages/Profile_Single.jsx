import React from 'react'
import Profile_Single_Breadcrumb from '../Components/Profile_Single/Profile_Single_Breadcrumb'
import Profile_Single_Header from '../Components/Profile_Single/Profile_Single_Header'
import Newsletter from '../Components/Home/Newsletter'
import Header from '../Components/Home/Header'

const Profile_Single = () => {
  return (
    <div>
      <Header/>
      <Profile_Single_Breadcrumb/>
      <Profile_Single_Header/>
      <Newsletter/>
    </div>
  )
}

export default Profile_Single