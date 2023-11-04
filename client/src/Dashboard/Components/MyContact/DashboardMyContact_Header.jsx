import React from 'react';
import '../../../Style/Dashboard_Home/DashboardMyContact_Header.css'
const DashboardMyContact_Header = () => {
  return (
    <div className='DashboardMyContact_Header'>
    <div className="quick-links-container">
      <div className="sidebar">
        <h2>Quick Links</h2>
        <ul>
          <li className='section'  >Shortlists & more</li >
          <li className='section' >New Matches</li >
          <li className='section' >My Matches</li >
          <li className='section' >Near Me</li >
          <li className='section' >My Saved Searches</li >
          <li className='section' >My Help</li >
          <li className='section' >Refer A Friend</li >
          <li className='section' >Need Help?</li >
          <li className='section' >Security Tips</li >
          <li className='section' >My Contact Details</li >
        </ul>
        <h2>Profile ID Search</h2>
        <div className="profile-search">
          <input type="text" placeholder="Enter Profile ID" />
          <button className='custom-button'>Go</button>
        </div>
      </div>
      <div className="main-content">
        <div className="contact-details">
          {/* <h3>Edit Contact details and display status</h3> */}
          <form>
            <label htmlFor="contact-name">Name of contact person</label>
            <input type="text" id="contact-name" />

            <label htmlFor="relationship">Relationship with the member</label>
            <input type="text" id="relationship" />

            <label htmlFor="convenient-time">Convenient time to call</label>
            <input type="text" id="convenient-time" />

            <label htmlFor="contact-setting">Contact display setting</label>
            <button className="save-button custom-button">Save Changes</button>
            {/* <select id="contact-setting">
              <option value="no-one">No one (Matches won't be able to call you)</option>
            </select> */}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DashboardMyContact_Header