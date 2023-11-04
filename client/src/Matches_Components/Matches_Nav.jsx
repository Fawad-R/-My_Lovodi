import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Matches/Matches_Nav.css'
const Matches_Nav = () => {
  const location = useLocation();

  return (
    // bg-primary
    <div className='Matches_Nav'>
      <nav className="navbar navbar-expand-lg mini_Header" style={{backgroundColor:"#ff4d4d"}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/newMatches" className={`nav-link text-white ${location.pathname === '/newMatches' ? 'active' : ''}`}>New Matches (1,297)</Link>
              </li>
              <li className="nav-item">
                <Link to="/todayMatches" className={`nav-link text-white ${location.pathname === '/todayMatches' ? 'active' : ''}`}>Today's Matches</Link>
              </li>
              <li className="nav-item">
                <Link to="/myMatches" className={`nav-link text-white ${location.pathname === '/myMatches' ? 'active' : ''}`}>My Matches (9999+)</Link>
              </li>
              <li className="nav-item">
                <Link to="/nearMatches" className={`nav-link text-white ${location.pathname === '/nearMatches' ? 'active' : ''}`}>Near Me (820)</Link>
              </li>
              <li className="nav-item">
                <Link to="/recentlyViewed" className={`nav-link text-white ${location.pathname === '/recentlyViewed' ? 'active' : ''}`}>Recently Viewed</Link>
              </li>
              <li className="nav-item">
                <Link to="/moreMatches" className={`nav-link text-white ${location.pathname === '/moreMatches' ? 'active' : ''}`}>More Matches</Link>
              </li>
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

export default Matches_Nav;
