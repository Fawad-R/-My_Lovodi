import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Notification/Notification_Navbar.css'
const Notification_Navbar = () => {
  const location = useLocation();

  return (
    // bg-primary
    <div className='Dashboard_Nav'>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#ff4d4d"}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link text-white ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/DashboardProfile" className={`nav-link text-white ${location.pathname === '/DashboardProfile' ? 'active' : ''}`}>My Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/DashboardMyPhotos" className={`nav-link text-white ${location.pathname === '/DashboardMyPhotos' ? 'active' : ''}`}>My Photos</Link>
              </li>
              <li className="nav-item">
                <Link to="/DashboardPreferences" className={`nav-link text-white ${location.pathname === '/DashboardPreferences' ? 'active' : ''}`}>Partner Preferences</Link>
              </li>
              <li className="nav-item">
                <Link to="/DashboardMyOrders" className={`nav-link text-white ${location.pathname === '/DashboardMyOrders' ? 'active' : ''}`}>My Orders</Link>
              </li>
              <li className="nav-item">
                <Link to="/DashboardMyContact" className={`nav-link text-white ${location.pathname === '/DashboardMyContact' ? 'active' : ''}`}>My Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/Referrals" className={`nav-link text-white ${location.pathname === '/Referrals' ? 'active' : ''}`}>Referrals</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Notification_Navbar