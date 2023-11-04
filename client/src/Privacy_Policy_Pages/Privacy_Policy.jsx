import React from 'react'
import Privacy_Policy_Header from '../Privacy_Policy_Components/Privacy_Policy_Header'
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb'
import Header from '../Components/Home/Header'

const Privacy_Policy = () => {
  return (
    <div>
        <Dashboard_Breadcrumb/>
        <Header/>
        <Privacy_Policy_Header/>
    </div>
  )
}

export default Privacy_Policy