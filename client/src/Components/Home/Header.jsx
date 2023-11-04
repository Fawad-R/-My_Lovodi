import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div>
            {/* <header style={{backgroundColor:"#5650CE"}} className="header-section"> */}
            <header style={{backgroundColor:"#321691"}} className="header-section">
                <div className="container">
                {/* style={{display:'flex',justifyContent:'space-between',border:'12px solid yellow'}} */}
                    <div  className="header-wrapper">
                        <div className="logo">
                            <a href="/dashboard">
                                {/* <img src="assets/images/logo/logo.png" alt="logo" /> */}
                                {/* <img style={{color:'white'}} src="img/profile.png" alt="logo" /> */}
                                {/* <img style={{color:'white',height:"100px",margin:"0%",padding:"0%"}} src="img/default2.png" alt="logo" /> */}
                                {/* <img src="img/cover4.png" alt="logo" /> */}
                                <img style={{height:"90px",marginTop:"-20%",marginBottom:'-25%',padding:"0%"}} src="img/default4.png" alt="logo" />
                                {/* <img style={{}} src="img/cover5.png" alt="logo" /> */}
                                {/* <img style={{height:"135px",marginTop:"-20%",marginBottom:'-25%',padding:"0%"}} src="img/default5.png" alt="logo" /> */}
                                {/* <h6>MY LOVODI</h6>  */}
                            </a>
                        </div>
                        <ul className="menu">
                            <li>
                                {/* <a href="/Matches" className="active">Matches</a> */}
                                {/* <Link to="/Matches" className={`nav-link text-white ${location.pathname === '/Matches' ? 'active' : ''}`}>Matches</Link> */}
                                <Link to="/newMatches" className={`nav-link text-white ${location.pathname === '/newMatches' ? 'active' : ''}`}>Matches</Link>
                            </li>
                            <li>
                                {/* <a href="/inbox">Inbox</a> */}
                                {/* <Link to="/inbox" className={`nav-link text-white ${location.pathname === '/inbox' ? 'active' : ''}`}>Inbox</Link> */}
                                <Link to="/inboxReceived" className={`nav-link text-white ${location.pathname === '/inboxReceived' ? 'active' : ''}`}>Inbox</Link>
                            </li>
                            {/* <li> */}
                                {/* <a href="/notification">Notification</a> */}
                                {/* <Link to="/notification" className={`nav-link text-white ${location.pathname === '/notification' ? 'active' : ''}`}>Notification</Link> */}
                            {/* </li> */}
                            <li>
                                {/* <a href="/Chat">Chat</a> */}
                                <Link to="/Chat" className={`nav-link text-white ${location.pathname === '/Chat' ? 'active' : ''}`}>Chat</Link>
                            </li>
                            <li>
                                {/* <a href="/myplan">My plan</a> */}
                                <Link to="/myplan" className={`nav-link text-white ${location.pathname === '/myplan' ? 'active' : ''}`}>Myplan</Link>
                            </li>
                            {/* <li> */}
                                {/* <a href="/help">Help</a> */}
                                {/* <Link to="/help" className={`nav-link text-white ${location.pathname === '/help' ? 'active' : ''}`}>Help</Link>
                            </li> */}
                            <li>
                                {/* <a href="/DashboardMyPhotos">Photo</a> */}
                                <Link to="/DashboardMyPhotos" className={`nav-link text-white ${location.pathname === '/DashboardMyPhotos' ? 'active' : ''}`}>Photos</Link>
                            </li>
                            <li>
                                {/* <a href="/allplan">All plan</a> */}
                                <Link to="/allplan" className={`nav-link text-white ${location.pathname === '/allplan' ? 'active' : ''}`}>All plan</Link>
                            </li>
                            <li>
                                {/* <a href="/billing">Cart</a> */}
                                <Link to="/billing" className={`nav-link text-white ${location.pathname === '/billing' ? 'active' : ''}`}>Cart</Link>
                            </li>

                            <li className="separator">
                                <span>|</span>
                            </li>
                            <li>
                                <div className="serch-icon">
                                <a href="/search">
                                    <i className="fas fa-search"></i>
                                </a>
                                </div>
                            </li>
                            {/* <li>
                                <div className="language-select">
                                    <select className="select-bar">
                                        <option value="">EN</option>
                                        <option value="">IN</option>
                                        <option value="">BN</option>
                                    </select>
                                </div>
                            </li> */}
                            <li  className="user-profile">
                                <a href="#">
                                    <img src="assets/images/user-demo.png" alt="" />
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <a href="/DashboardProfile">Profile</a>
                                    </li>
                                    <li>
                                        <a href="/userpanel">Account Settings</a>
                                    </li>
                                    <li>
                                        <a href="/contactFilter">Contact Filters</a>
                                    </li>
                                    <li>
                                        <a href="/emailAlert">Email / SMS Alerts</a>
                                    </li>
                                    <li>
                                        <a href="/privacyPolicy">Privacy Options</a>
                                    </li>
                                    <li>
                                        <a href="/help">Help</a>
                                    </li>
                                    <li>
                                        <a href="/notification">Notification</a>
                                    </li>
                                    <li>
                                        <a href="#">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header