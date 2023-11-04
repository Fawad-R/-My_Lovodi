import React from 'react'
import Error404_Breadcrumb from '../Components/Error/Error404_Breadcrumb'
import Header from '../Components/Home/Header'
import Newsletter from '../Components/Home/Newsletter'
import Error404_Header from '../Components/Error/Error404_Header'

const Error_404 = () => {
  return (
    <div>
        <Header/>
        <Error404_Breadcrumb/>
        <Error404_Header/>
        <Newsletter/>
    </div>
  )
}

export default Error_404