import React, { useState } from 'react';
import '../Style/Email_Alerts/Email_Alerts_Header.css';

function Email_Alerts_Header() {
  const [emailFrequency, setEmailFrequency] = useState('Daily');
  const [selectedEmailAlert, setSelectedEmailAlert] = useState('Match Mail & Photo Match Mail');
  const [isSubscribedToShaadiSpecials, setSubscribedToShaadiSpecials] = useState(false);
  const [isSubscribedToShaadiInSite, setSubscribedToShaadiInSite] = useState(false);
  const [isSubscribedToShaadiTimes, setSubscribedToShaadiTimes] = useState(false);

  const handleEmailFrequencyChange = (e) => {
    setEmailFrequency(e.target.value);
  };

  const handleEmailAlertChange = (e) => {
    setSelectedEmailAlert(e.target.value);
  };

  const toggleShaadiSpecials = () => {
    setSubscribedToShaadiSpecials(!isSubscribedToShaadiSpecials);
  };

  const toggleShaadiInSite = () => {
    setSubscribedToShaadiInSite(!isSubscribedToShaadiInSite);
  };

  const toggleShaadiTimes = () => {
    setSubscribedToShaadiTimes(!isSubscribedToShaadiTimes);
  };

  const emailAlertOptions = [
    'Match Mail & Photo Match Mail',
    'Recent Visitors Email',
    'Members who Shortlisted you Email',
    'Viewed Profiles Email',
    'Similar Profiles Email',
    'Message Received Alert',
    'Shaadi.com Profile Blaster',
  ];

  return (
    <div className="Email_Alerts_Header">
    <div className="email-sms-alerts-container">
      <h2>Email / SMS Alerts</h2>

      {/* My Alerts Section */}
      <div className="alerts-section">
        <h3>My Alerts</h3>
        <p>
          <select value={selectedEmailAlert} onChange={handleEmailAlertChange}>
            {emailAlertOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </p>
        <p>Personalized matches for you delivered via email as often as you like. A very effective match-making tool.</p>
      </div>

      {/* Email Alert Section */}
      <div className="alerts-section">
        <h3>Email Alert</h3>
        <div className="email-frequency">
          <p>Email Frequency:</p>
          <label>
            <input
              type="radio"
              value="Daily"
              checked={emailFrequency === 'Daily'}
              onChange={handleEmailFrequencyChange}
            />
            Daily
          </label>
          <label>
            <input
              type="radio"
              value="Tri-Weekly"
              checked={emailFrequency === 'Tri-Weekly'}
              onChange={handleEmailFrequencyChange}
            />
            Tri-Weekly
          </label>
          <label>
            <input
              type="radio"
              value="Weekly"
              checked={emailFrequency === 'Weekly'}
              onChange={handleEmailFrequencyChange}
            />
            Weekly
          </label>
        </div>
        <div className='allButtons'>
        <button className="unsubscribe-button">Unsubscribe</button>
        <button className="cancel-button">Cancel</button>
        <button className="submit-button">Submit</button>
        </div>
      </div>

      {/* SMS Alert Section */}
      <div className="alerts-section">
        <h3>SMS Alert</h3>
        <p>Shaadi.com Profile Blaster</p>
      </div>

      {/* Newsletters Section */}
      <div className="alerts-section">
        <h3>Shaadi.com Newsletters</h3>
        <label>
          <input
            type="checkbox"
            checked={isSubscribedToShaadiSpecials}
            onChange={toggleShaadiSpecials}
          />
          Shaadi Specials
        </label>
        <label>
          <input
            type="checkbox"
            checked={isSubscribedToShaadiInSite}
            onChange={toggleShaadiInSite}
          />
          Shaadi InSite
        </label>
        <label>
          <input
            type="checkbox"
            checked={isSubscribedToShaadiTimes}
            onChange={toggleShaadiTimes}
          />
          Shaadi Times Newsletters
        </label>
      </div>

      {/* Manage Subscriptions Section */}
      <div className="manage-subscriptions">
        <p>
          Click <a href="#">here</a> to manage your subscriptions
        </p>
      </div>

      {/* Email Address Section */}
      <div className="email-address">
        <p>
          All your Shaadi.com emails and ShaadiTimes newsletters will be delivered to:
        </p>
        <p>Edit</p>
        <p>
          Note: This is also the email for logging into your Shaadi.com account.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Email_Alerts_Header;
