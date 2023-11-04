import React from 'react'
import Members_Header from '../Components/Members/Members_Header'
import Members from '../Pages/Members'
import Header from '../Components/Home/Header'
import Members_Breadcrumb from '../Components/Members/Members_Breadcrumb'
import Newsletter from '../Components/Home/Newsletter'
import Matches_Nav from '../Matches_Components/Matches_Nav'
import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2'
import Card3 from '../Cards/Card3'

const Matches_Home = () => {
  return (
    <div>
        <Header/>
        <Members_Breadcrumb/>
        <Matches_Nav/>
        <Card1/>
        <Card2/>
        <Card3/>
        {/* <Members_Header/> */}
        <Newsletter/>
    </div>
  )
}

export default Matches_Home