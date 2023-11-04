import React from 'react'
import Chat_Header from '../Chat_Components/Chat_Header'
import Dashboard_Breadcrumb from '../Dashboard_Pages/Dashboard_Breadcrumb'
import Header from '../Components/Home/Header'

const Chat_Home = () => {
    return (
        <div>
            <Header/>
            <Dashboard_Breadcrumb/>
            <Chat_Header/>
        </div>
    )
}

export default Chat_Home