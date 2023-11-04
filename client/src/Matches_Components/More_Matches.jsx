import React from 'react'
import Card1 from '../Cards/Card1'
import Header from '../Components/Home/Header'
import Members_Breadcrumb from '../Components/Members/Members_Breadcrumb'
import Matches_Nav from '../Matches_Components/Matches_Nav'
import Card8 from '../Cards/Card8'
const More_Matches = () => {
  return (
    <div className='My_Matches'>
         <Header/>
        <Members_Breadcrumb/>
        <Matches_Nav/>
        <div style={{margin:'1% auto',textAlign:'center'}}>
        <Card8/>
        <Card8/>
        <Card8/>
        <Card8/>
        
        </div>
        
    </div>
  )
}

export default More_Matches