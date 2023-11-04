import React from 'react'
import Header from '../Components/Home/Header'
import Search from '../Components/Home/Search'
import Banner from '../Components/Home/Banner'
import Feature from '../Components/Home/Feature'
import Flirting from '../Components/Home/Flirting'
import Steps from '../Components/Home/Steps'
import Statistics from '../Components/Home/Statistics'
import Join_Now from '../Components/Home/Join_Now'
import Amazing_Feature from '../Components/Home/Amazing_Feature'
import Latest_Registered from '../Components/Home/Latest_Registered'
import Success_Stories from '../Components/Home/Success_Stories'
import Newsletter from '../Components/Home/Newsletter'
import Contact_Header from '../Components/Contact/Contact_Header'
import Blog_Header from '../Components/Blog/Blog_Header'
import Testimonial_Header from '../Other_Components/Help/Testimonial/Testimonial_Header'
import Banner2 from '../Components/Home/Banner2'

const Home = () => {
  return (
    <div>
        <div>
        {/* <Header/> */}
        <Search/>
        <Banner/>
        {/* <Banner2/> */}
        <Feature/>
        {/* <Flirting/> */}
        <Steps/>
        {/* <Statistics/> */}
        {/* <Join_Now/> */}
        <Latest_Registered/>
        <Success_Stories/>
        {/* <Amazing_Feature/> */}
        <Testimonial_Header/>
        <Blog_Header/>
        <Contact_Header/>
        <Newsletter/>
        </div>
    </div>
  )
}

export default Home