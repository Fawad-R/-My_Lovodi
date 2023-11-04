import React from 'react'
import About_Breadcrumb from '../Components/About/About_Breadcrumb'
import About_Header from '../Components/About/About_Header'
import Newsletter from '../Components/Home/Newsletter'
import Header from '../Components/Home/Header'
import Amazing_Feature from '../Components/Home/Amazing_Feature'
import Success_Stories from '../Components/Home/Success_Stories'
import About_More from '../Components/About/About_More'

const About = () => {
  return (
    <div>
        <Header/>
        <About_Breadcrumb/>
        <About_Header/>
        <About_More/>
        <Amazing_Feature/>
        <Success_Stories/>
        <Newsletter/>
    </div>
  )
}

export default About