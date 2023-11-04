import React, { useState } from 'react';
import '../../../Style/Dashboard_Home/Profile_Preferences_Header2.css';

function Profile_Preferences_Header2() {
  const [preferences, setPreferences] = useState({
    ageRange: '29 to 35',
    heightRange: "5' 8'' to 6' 8''",
    maritalStatus: 'Never Married',
    community: 'Open to all',
    religion: 'Muslim',
    motherTongue: 'Urdu, Punjabi, English',
    countryLivingIn: 'Open to all',
    stateLivingIn: 'Open to all',
    residencyStatus: 'Open to all',
    qualification: 'Open to all',
    workingWith: 'Open to all',
    profession: 'Open to all',
    annualIncome: 'Open to all',
    profileCreatedBy: 'Open to all',
    diet: 'Open to all',
  });

  const handleEdit = (field) => {
    const newValue = prompt(`Edit ${field}:`, preferences[field]);
    if (newValue !== null) {
      setPreferences({ ...preferences, [field]: newValue });
    }
  };

  return (
    <div className="Profile_Preferences_Header2">
    <div className="partner-preferences">
      <h2>Your Partner Preferences</h2>

      {Object.entries(preferences).map(([field, value]) => (
        <div className="preference-item" key={field} onClick={() => handleEdit(field)}>
          <span>{field}</span>
          <span>{value}</span>
          <i className="edit-icon">Edit</i>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Profile_Preferences_Header2;
