import React from 'react'
import Blog_Breadcrumb from '../Components/Blog/Blog_Breadcrumb'
import Header from '../Components/Home/Header'
import Blog_Header from '../Components/Blog/Blog_Header'
import Newsletter from '../Components/Home/Newsletter'

const Blog = () => {
  return (
    <div>
        <Header/>
        <Blog_Breadcrumb/>
        <Blog_Header/>
        <Newsletter/>
    </div>
  )
}

export default Blog