import React, { useState } from 'react'
import '../../../Style/Dashboard_Home/Dashboard_MyPhotos_Display.css'

const MyPhotos_Display = () => {
    const [selectedOption, setSelectedOption] = useState('visibleToAll');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className='MyPhotos_Display'>
    <div className="container">
      <h1>Choose Display Option</h1>
      <div className="image-container">
        <div className="image_original">
          <img style={{height:'220px',backgroundColor:'white',width:'250px',border:'1px solid',borderRadius:'5px'}} src="img/fawad4.png" alt="Original Image" />
        </div>
        <div className="image_blurred">
          <img style={{height:'220px',backgroundColor:'white',width:'250px',border:'1px solid',borderRadius:'5px'}} src="img/fawad3.png" alt="Original Image" />
        </div>
      </div>
      <form>
        <label htmlFor="displayOption">Display Option:</label>
        <select id="displayOption" name="displayOption" value={selectedOption} onChange={handleOptionChange}>
          <option value="visibleToAll">Visible to all Members</option>
          <option value="visibleToMembersILikeAndPremium">Visible to Members I like and to all Premium Members</option>
        </select>
        <button className='custom-button' type="submit">Save my settings</button>
      </form>
    </div> 
    </div> 
  );
}

export default MyPhotos_Display