import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Community from './Pages/Community'
import Membership from './Pages/Membership'
import Blog from './Pages/Blog'
import Blog_Single from './Pages/Blog_Single'
import User_Panel from './Pages/User_Panel'
import About from './Pages/About'
import Community_Single from './Pages/Community_Single'
import Members from './Pages/Members'
import Profile_Single from './Pages/Profile_Single'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Error_404 from './Pages/Error_404'
import Dashboard_Home from './Dashboard_Pages/Dashboard_Home'
import Dashboard_MyProfile from './Dashboard_Pages/Dashboard_MyProfile'
import Dashboard_Profile_Preferences from './Dashboard_Pages/Dashboard_Profile_Preferences'
import Dashboard_MyPhotos from './Dashboard_Pages/Dashboard_MyPhotos'
import Dashboard_MyOrders from './Dashboard_Pages/Dashboard_MyOrders'
import Matches_Home from './Matches_Pages/Matches_Home'
import Search_Home from './Search_Pages/Search_Home'
import Chat_Home from './Chat_Pages/Chat_Home'
import Notification_Home from './Notification_Pages/Notification_Home'
import Help_Home from './Help_Pages/Help_Home'
import Billing_Home from './Components/Billing_Pages/Billing_Home'
import './App.css'
import DashboardMyContact from './Dashboard_Pages/DashboardMyContact'
import Dashboard_Referrals from './Dashboard_Pages/Dashboard_Referrals'
import Inbox_Navbar from './Inbox_Components/Inbox_Navbar'
import Inbox_Home from './Inbox_pages/Inbox_Home'
import Contact_Filter from './Contact_Fllters_Pages/Contact_Filter'
import Email_Alerts from './Email_Alerts_Pages/Email_Alerts'
import Privacy_Policy from './Privacy_Policy_Pages/Privacy_Policy'
import New_Matches from './Matches_Components/New_Matches'
import My_Matches from './Matches_Components/My_Matches'
import Near_Me_Matches from './Matches_Components/Near_Me_Matches'
import More_Matches from './Matches_Components/More_Matches'
import Recently_Viewed_Matches from './Matches_Components/Recently_Viewed_Matches'
import Accepted_Messages from './Inbox_Components/Accepted_Messages'
import Received_Messages from './Inbox_Components/Received_Messages'
import Deleted_Messages from './Inbox_Components/Deleted_Messages'
import Sent_Messages from './Inbox_Components/Sent_Messages'
import Requested_Messages from './Inbox_Components/Requested_Messages'
const App = () => {
  return (
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/community' element={<Community/>} />
      <Route  path='/membership' element={<Membership/>} />
      <Route  path='/blog' element={<Blog/>} />
      <Route  path='/singleblog' element={<Blog_Single/>} />
      <Route  path='/userpanel' element={<User_Panel/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/singlecommunity' element={<Community_Single/>} />
      <Route  path='/members' element={<Members/>} />
      <Route  path='/singleprofile' element={<Profile_Single/>} />
      <Route  path='/contact' element={<Contact/>} />
      <Route  path='/register' element={<Register/>} />
      <Route  path='/login' element={<Login/>} />
      <Route  path='/help' element={<Help_Home/>} />
      <Route  path='/Dashboard' element={<Dashboard_Home/>} />
      <Route  path='/DashboardProfile' element={<Dashboard_MyProfile/>} />
      <Route  path='/DashboardPreferences' element={<Dashboard_Profile_Preferences/>} />
      <Route  path='/DashboardMyPhotos' element={<Dashboard_MyPhotos/>} />
      <Route  path='/DashboardMyOrders' element={<Dashboard_MyOrders/>} />
      <Route  path='/DashboardMyContact' element={<DashboardMyContact/>} />
      <Route  path='/Referrals' element={<Dashboard_Referrals/>} />
      {/* <Route  path='/Matches' element={<Matches_Home/>} /> */}
      <Route  path='/Search' element={<Search_Home/>} />
      <Route  path='/Chat' element={<Chat_Home/>} />
      <Route  path='/notification' element={<Notification_Home/>} />
      <Route  path='/myplan' element={<Membership/>} />
      <Route  path='/billing' element={<Billing_Home/>} />
      <Route  path='/allplan' element={<Membership/>} />
      {/* <Route  path='/inbox' element={<Inbox_Home/>} /> */}
      <Route  path='/contactFilter' element={<Contact_Filter/>} />
      <Route  path='/emailAlert' element={<Email_Alerts/>} />
      <Route  path='/privacyPolicy' element={<Privacy_Policy/>} />
      <Route  path='/newMatches' element={<New_Matches/>} />
      <Route  path='/myMatches' element={<My_Matches/>} />
      <Route  path='/nearMatches' element={<Near_Me_Matches/>} />
      <Route  path='/todayMatches' element={<New_Matches/>} />
      <Route  path='/recentlyViewed' element={<Recently_Viewed_Matches/>} />
      <Route  path='/moreMatches' element={<More_Matches/>} />
      <Route  path='/inboxReceived' element={<Received_Messages/>} />
      <Route  path='/inboxAccepted' element={<Accepted_Messages/>} />
      <Route  path='/inboxDeleted' element={<Deleted_Messages/>} />
      <Route  path='/inboxRequested' element={<Requested_Messages/>} />
      <Route  path='/inboxSent' element={<Sent_Messages/>} />
      <Route  path='*' element={<Error_404/>} />
    </Routes>

  )
}

export default App