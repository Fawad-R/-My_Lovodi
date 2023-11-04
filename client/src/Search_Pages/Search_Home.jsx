import React from 'react'
import '../Style/Search/Search_Home.css'
// App.js
import { useState } from 'react';
import Search_Header from '../Search_Components/Search_Header';
import Header from '../Components/Home/Header';
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb';

function Search_Home() {

  return (
    <div >
      <Header />
      <Dashboard_Breadcrumb />
      {/* <Search_Header /> */}
      <Search_Header />
      
    </div>
  );
}

export default Search_Home