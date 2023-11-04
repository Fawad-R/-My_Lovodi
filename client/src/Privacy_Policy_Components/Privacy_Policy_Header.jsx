import React, { useState } from 'react';
import '../Style/Privacy_Policy/Privacy_Policy_Header.css';

function Privacy_Policy_Header() {
  const [displayName, setDisplayName] = useState('Malaika S');
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [emailHidden, setEmailHidden] = useState(true);
  const [photoVisible, setPhotoVisible] = useState('Members I like');
  const [dateOfBirth, setDateOfBirth] = useState('dd/mm/yyyy');
  const [incomeVisible, setIncomeVisible] = useState('Visible to all Members');
  const [visitorsSetting, setVisitorsSetting] = useState(true);
  const [shortlistSetting, setShortlistSetting] = useState(true);
  const [doNotDisturb, setDoNotDisturb] = useState(true);
  const [profilePrivacy, setProfilePrivacy] = useState('Visible to all, including unregistered visitors');
  const [webNotifications, setWebNotifications] = useState('Unsubscribed');

  return (
    <div className="privacy-options">
      <h1>Privacy Options</h1>

      <div className="privacy-option">
        <span>Display Name as</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button className='custom-button'>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Phone</span>
        {phoneVisible ? "No one (Matches won't be able to call you)" : "Visible"}
        <button className='custom-button' onClick={() => setPhoneVisible(!phoneVisible)}>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Email</span>
        {emailHidden ? "Hide my Email Address" : "Visible"}
        <button className='custom-button' onClick={() => setEmailHidden(!emailHidden)}>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Photo</span>
        <span>Only visible to {photoVisible}</span>
        <button className='custom-button'>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Date of Birth</span>
        <input
          type="text"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <button className='custom-button'>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Annual Income</span>
        <span>{incomeVisible}</span>
        <button className='custom-button'>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Visitors Setting</span>
        {visitorsSetting ? "Let other Members know that I have visited their Profile" : "Don't let them know"}
        <button className='custom-button' onClick={() => setVisitorsSetting(!visitorsSetting)}>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Shortlist Setting</span>
        {shortlistSetting ? "Let other Members know that I have shortlisted their Profile" : "Don't let them know"}
        <button className='custom-button' onClick={() => setShortlistSetting(!shortlistSetting)}>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Do Not Disturb</span>
        {doNotDisturb ? "Shaadi.com can call me for Premium Membership related offers and on behalf of Premium Members who wish to Connect with me" : "I'm not interested in calls"}
        <button className='custom-button' onClick={() => setDoNotDisturb(!doNotDisturb)}>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Profile Privacy</span>
        <span>{profilePrivacy}</span>
        <button className='custom-button'>Edit</button>
      </div>

      <div className="privacy-option">
        <span>Web Notifications</span>
        <span>{webNotifications}</span>
        <button className='custom-button' >Edit</button>
      </div>
    </div>
  );
}


export default Privacy_Policy_Header;
