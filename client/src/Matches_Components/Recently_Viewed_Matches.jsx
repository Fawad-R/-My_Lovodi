import React from 'react'
import Card1 from '../Cards/Card1'
import Header from '../Components/Home/Header'
import Members_Breadcrumb from '../Components/Members/Members_Breadcrumb'
import Matches_Nav from '../Matches_Components/Matches_Nav'
import Card2 from '../Cards/Card2'
import Card9 from '../Cards/Card9'

const Recently_Viewed_Matches = () => {
  return (
    <div className='New_Matches'>
        <Header/>
        <Members_Breadcrumb/>
        <Matches_Nav/>
        <div style={{display:'flex',justifyContent:'',flexWrap:'wrap',width:"70%",margin:'3% auto',backgroundColor:'white',}}>
        <Card9/>
        <Card9/>
        <Card9/>
        {/* <Card2/> */}
    </div>
    </div>
  )
}

export default Recently_Viewed_Matches