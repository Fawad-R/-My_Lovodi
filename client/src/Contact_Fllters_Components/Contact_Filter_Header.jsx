import React, { useState } from 'react';
import '../Style/Contact_Filter/Contact_Filter_Header.css'; // Import the CSS file

// import React, { useState } from 'react';
// import './ContactFilters.css'; // Import your CSS file

function Contact_Filter_Header() {
  const [ageRange, setAgeRange] = useState({ min: 28, max: 36 });
  const [heightRange, setHeightRange] = useState({ min: "4' 5''", max: "7' 0''" });
  const [selectedCountry, setSelectedCountry] = useState("Open to all");
  const [selectedReligion, setSelectedReligion] = useState("Muslim");
  const [selectedCommunity, setSelectedCommunity] = useState("Open to all");
  const [selectedMotherTongue, setSelectedMotherTongue] = useState("Open to all");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("Never Married");

  return (
    <div className="Contact_Filter_Header0">
      <div className="Contact_Filter_Header">
        <div className="contact-filters-container">
          <h2>Contact Filters</h2>

          <div className="filter-section">
            <h3>Who can contact me?</h3>
            <p>Only Members matching the below criteria will get to see your contact details.</p>
          </div>

          <div className="filter-section">
            <h3>Age</h3>
            <p>Tap on the field to edit</p>
            <label>Minimum Age:</label>
            <input
              type="number"
              value={ageRange.min}
              onChange={(e) => setAgeRange({ ...ageRange, min: e.target.value })}
            />
            <label>Maximum Age:</label>
            <input
              type="number"
              value={ageRange.max}
              onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value })}
            />
          </div>

          <div className="filter-section">
            <h3>Height</h3>
            <p>Select a minimum height range of 6 inches to get relevant matches</p>
            <label>Selected Height range:</label>
            <select
              value={heightRange.min}
              onChange={(e) => setHeightRange({ ...heightRange, min: e.target.value })}
            >
              <option value="4' 5''">4' 5''</option>
              {/* Add more height options here */}
            </select>
            <label>to</label>
            <select
              value={heightRange.max}
              onChange={(e) => setHeightRange({ ...heightRange, max: e.target.value })}
            >
              <option value="7' 0''">7' 0''</option>
              {/* Add more height options here */}
            </select>
          </div>


          <div className="filter-section">
            <h3>Country</h3>
            <p>Tap on the field to edit</p>
            <div className="select-container">
              <div className="select-icon"></div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="Open to all">Open to all</option>
                <option value="Your Country">Your Country</option>
                <option value="Another Country">Another Country</option>
                {/* Add more country options here */}
              </select>
            </div>
          </div>

          <div className="filter-section">
            <h3>
              <div className="religion-icon"></div> Religion
            </h3>
            <p>Tap on the field to edit</p>
            <select
              value={selectedReligion}
              onChange={(e) => setSelectedReligion(e.target.value)}
            >
              <option value="Muslim">Muslim</option>
              <option value="Your Religion">Your Religion</option>
              <option value="Another Religion">Another Religion</option>
              {/* Add more religion options here */}
            </select>
          </div>

          <div className="filter-section">
            <h3>
              <div className="community-icon"></div> Community
            </h3>
            <p>Tap on the field to edit</p>
            <select
              value={selectedCommunity}
              onChange={(e) => setSelectedCommunity(e.target.value)}
            >
              <option value="Open to all">Open to all</option>
              <option value="Your Community">Your Community</option>
              <option value="Another Community">Another Community</option>
              {/* Add more community options here */}
            </select>
          </div>

          <div className="filter-section">
            <h3>Mother Tongue</h3>
            <p>Tap on the field to edit</p>
            <div className="select-container">
              <div className="select-icon"></div>
              <select
                value={selectedMotherTongue}
                onChange={(e) => setSelectedMotherTongue(e.target.value)}
              >
                <option value="Open to all">Open to all</option>
                <option value="Your Mother Tongue">Your Mother Tongue</option>
                <option value="Another Mother Tongue">Another Mother Tongue</option>
                {/* Add more mother tongue options here */}
              </select>
            </div>
          </div>

          <div className="filter-section">
            <h3>Marital Status</h3>
            <p>Tap on the field to edit</p>
            <select
              value={selectedMaritalStatus}
              onChange={(e) => setSelectedMaritalStatus(e.target.value)}
            >
              <option value="Never Married">Never Married</option>
              <option value="Your Marital Status">Your Marital Status</option>
              <option value="Another Marital Status">Another Marital Status</option>
              {/* Add more marital status options here */}
            </select>
          </div>

          {/* // ... (rest of the code) */}

          {/* Continue adding other filter sections here for Country, Religion, Community, Mother Tongue, and Marital Status */}
          {/* Use similar structure with labels and select elements */}

          <div className="filter-section">
            <h3>Connection requests</h3>
            <p>Connection requests from all other Members will appear in the Filtered out folder of your Inbox. These members can chat with you, but will not be able to see your contact details until you accept their Request.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default ContactFilters;
export default Contact_Filter_Header;
