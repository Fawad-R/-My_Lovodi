import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Inbox/Inbox_Navbar.css'
const Inbox_Navbar = () => {
  const location = useLocation();

  return (
    // bg-primary
    <div className='Inbox_Navbar'>
      <nav className="navbar navbar-expand-lg mini_Header" style={{backgroundColor:"#ff4d4d"}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/inboxReceived" className={`nav-link text-white ${location.pathname === '/inboxReceived' ? 'active' : ''}`}>Received (23)</Link>
              </li>
              <li className="nav-item">
                <Link to="/inboxAccepted" className={`nav-link text-white ${location.pathname === '/inboxAccepted' ? 'active' : ''}`}>Accepted (5)
</Link>
              </li>
              <li className="nav-item">
                <Link to="/inboxRequested" className={`nav-link text-white ${location.pathname === '/inboxRequested' ? 'active' : ''}`}>Requests</Link>
              </li>
              <li className="nav-item">
                <Link to="/inboxSent" className={`nav-link text-white ${location.pathname === '/inboxSent' ? 'active' : ''}`}>Sent</Link>
              </li>
              <li className="nav-item">
                <Link to="/inboxDeleted" className={`nav-link text-white ${location.pathname === '/inboxDeleted' ? 'active' : ''}`}>Deleted</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/DashboardMyContact" className={`nav-link text-white ${location.pathname === '/DashboardMyContact' ? 'active' : ''}`}>My Contact</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/Referrals" className={`nav-link text-white ${location.pathname === '/Referrals' ? 'active' : ''}`}>Referrals</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Inbox_Navbar