import React from 'react'
import Card1 from '../Cards/Card1'
import Header from '../Components/Home/Header'
import Members_Breadcrumb from '../Components/Members/Members_Breadcrumb'
import Matches_Nav from '../Matches_Components/Matches_Nav'
import Matches_Sidebar from './Matches_Sidebar'

const Near_Me_Matches = () => {
  return (
    <div className='New_Matches'>
      <Header />
      <Members_Breadcrumb />
      <Matches_Nav />
      <div style={{ display: 'flex',justifyContent:'center',margin:'1%' }}>
        <Matches_Sidebar />
        <div>
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
    </div>
  )
}

export default Near_Me_Matches