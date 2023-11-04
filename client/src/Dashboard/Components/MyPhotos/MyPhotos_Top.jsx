import React, { useState } from 'react'
import '../../../Style/Dashboard_Home/Dashboard_MyPhotos_Top.css'
import MyPhotos_Display from './MyPhotos_Display';
const MyPhotos_Top = () => {
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [photoUploadMessage, setPhotoUploadMessage] = useState('');
  
    const handleFileUpload = (event) => {
      const files = event.target.files;
      const allowedFormats = ['jpg', 'jpeg', 'png', 'webp'];
  
      if (files.length > 20) {
        setPhotoUploadMessage('You can upload a maximum of 20 photos.');
        return;
      }
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileFormat = file.name.split('.').pop().toLowerCase();
  
        if (!allowedFormats.includes(fileFormat)) {
          setPhotoUploadMessage('Please upload photos in jpg, jpeg, png, or webp format.');
          return;
        }
      }
  
      // Process the selected photos (upload logic can be added here)
      setSelectedPhotos(files);
      setPhotoUploadMessage('Uploading photos...'); // You can replace this with your own logic
    };
  
  return (
    <>
    <div className='Dashboard_MyPhotos_Top'>
        <div className="photo-upload">
          
                    <p>Get more responses by uploading up to 20 photos on your profile.</p>
                    <label className="upload-button custom-button">
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png, .webp"
                            multiple
                            onChange={handleFileUpload}
                        />
                        Browse Photo
                    </label>
                    
                    <p className="upload-message">{photoUploadMessage}</p>
                </div>
    </div>
    </>
  )
}

export default MyPhotos_Top
