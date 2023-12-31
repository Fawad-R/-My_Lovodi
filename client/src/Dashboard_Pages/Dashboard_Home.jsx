import React from 'react'
import Dashboard_Nav from '../Dashboard/Components/Navbar/Dashboard_Nav'
import Header from '../Components/Home/Header'
import Dashboard_Card_1 from '../Dashboard/Components/Card/Dashboard_Card_1'
import Dashboard_Card_2 from '../Dashboard/Components/Card/Dashboard_Card_2'
import Dashboard_Card_Main1 from '../Dashboard/Components/Card/Dashboard_Card_Main1'
import Dashboard_Card_Main2 from '../Dashboard/Components/Card/Dashboard_Card_Main2'
import '../Style/Dashboard_Home/Dashboard_Home.css'
import Dashboard_Breadcrumb from './Dashboard_Breadcrumb'
import Card5 from '../Cards/Card5'
import Card3 from '../Cards/Card3'

const Dashboard_Home = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];
  return (
    <div className='Dashboard_Home0'>
      {/* style={{backgroundColor:"rgb(86,52,201)",border:"2px solid"}} */}
      <div>
        <Dashboard_Breadcrumb />
        <div style={{ backgroundColor: "5650CE" }}>
          <Header />
        </div>
        <Dashboard_Nav />
        <div className='Dashboard_Home'>
          <Dashboard_Card_1 />
          <div className='Dashboard_Home_Main_Cards'>
            <Dashboard_Card_Main1 />
            <div className='Dashboard_Home_Main_Cards_2'>
              <Dashboard_Card_Main2 images={images} />
              <div style={{ textAlign: 'left' }}>
                <i>Recent Visitors 999+</i>
                <Card3 />
              </div>
              <div style={{ textAlign: 'left' }}>
                <i>Invitations 999+</i>
                <Card3 />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', width: '820px' }}>
                <div style={{ textAlign: 'left',marginRight:'2%' }}>
                  <p><i>Premium Matches 999+</i></p>
                  <Card5 />
                  <Card5 />
                  <Card5 />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p><i>New Matches 999+</i></p>
                  <Card5 />
                  <Card5 />
                  <Card5 />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p><i>Booster Matches 999+</i></p>
                  <Card5 />
                  <Card5 />
                  <Card5 />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Dashboard_Card_2 />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_Home