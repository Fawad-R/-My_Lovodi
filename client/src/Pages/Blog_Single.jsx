import React from 'react'
import Blog_Single_Breadcrumb from '../Components/Blog_Single/Blog_Single_Breadcrumb'
import Header from '../Components/Home/Header'
import Blog_Single_Header from '../Components/Blog_Single/Blog_Single_Header'
import Newsletter from '../Components/Home/Newsletter'

const Blog_Single = () => {
  return (
    <div>
        <Blog_Single_Breadcrumb/>
        <Header/>
        <Blog_Single_Header/>
        <Newsletter/>
    </div>
  )
}

export default Blog_Single