import React from 'react'
import Profile_Preferences_Header from '../Dashboard/Components/Profile_Preferences/Profile_Preferences_Header'
import Dashboard_Nav from '../Dashboard/Components/Navbar/Dashboard_Nav'
import Header from '../Components/Home/Header'
import Dashboard_Breadcrumb from './Dashboard_Breadcrumb'
import Profile_Preferences_Header2 from '../Dashboard/Components/Profile_Preferences/Profile_Preferences_Header2'

const Dashboard_Profile_Preferences = () => {
  return (
    <div>
      <Header/>
        <Dashboard_Breadcrumb/>
        <Dashboard_Nav/>
        {/* <Profile_Preferences_Header/> */}
        <Profile_Preferences_Header2/>
    </div>
  )
}

export default Dashboard_Profile_Preferences