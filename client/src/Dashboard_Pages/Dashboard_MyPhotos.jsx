import React from 'react'
import MyPhotos_Header from '../Dashboard/Components/MyPhotos/MyPhotos_Header'
import MyPhotos_Top from '../Dashboard/Components/MyPhotos/MyPhotos_Top'
import Header from '../Components/Home/Header'
import Dashboard_Breadcrumb from './Dashboard_Breadcrumb'
import MyPhotos_Display from '../Dashboard/Components/MyPhotos/MyPhotos_Display'
import Dashboard_Nav from '../Dashboard/Components/Navbar/Dashboard_Nav'
const Dashboard_MyPhotos = () => {
  return (
    <div>
      <Dashboard_Breadcrumb/>
      <Header/>
      <Dashboard_Nav/>
        <MyPhotos_Top/>
        <MyPhotos_Display/>
        <MyPhotos_Header/>
    </div>
  )
}

export default Dashboard_MyPhotos