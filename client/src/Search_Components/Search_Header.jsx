import React from 'react'
import '../Style/Search/Search_Home.css'
// App.js
import { useState } from 'react';

function Search_Header() {
    const [searchParams, setSearchParams] = useState({
        gender: '',
        age: '',
        height: '',
        location: '',
        religion: '',
        caste: '',
        education: '',
        occupation: '',
        maritalStatus: '',
        diet: '',
        smoke: '',
        drink: '',
        complexion: '',
        motherTongue: '',
        familyStatus: '',
        familyType: '',
        familyValues: '',
        manglik: '',
        disabilities: '',
    });

    const handleSearch = () => {
        // Implement the search functionality here
        console.log('Search Parameters:', searchParams);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({ ...searchParams, [name]: value });
    };

    return (
        <div className="Search_Header">
            <div className="App">
                <h1 style={{color:'black'}}>Matrimony Search</h1>
                <div className="search-form">
                    <div className="input-group">
                        <label>Gender:</label>
                        <select name="gender" value={searchParams.gender} onChange={handleChange}>
                            <option value="">Any</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Age:</label>
                        <input type="number" name="age" value={searchParams.age} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Height:</label>
                        <input type="text" name="height" value={searchParams.height} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Location:</label>
                        <input type="text" name="location" value={searchParams.location} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Religion:</label>
                        <input type="text" name="religion" value={searchParams.religion} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Caste:</label>
                        <input type="text" name="caste" value={searchParams.caste} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Education:</label>
                        <input type="text" name="education" value={searchParams.education} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Occupation:</label>
                        <input type="text" name="occupation" value={searchParams.occupation} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Marital Status:</label>
                        <select name="maritalStatus" value={searchParams.maritalStatus} onChange={handleChange}>
                            <option value="">Any</option>
                            <option value="never-married">Never Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                            <option value="separated">Separated</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Diet:</label>
                        <input type="text" name="diet" value={searchParams.diet} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Smoking Habits:</label>
                        <select name="smoke" value={searchParams.smoke} onChange={handleChange}>
                            <option value="">Any</option>
                            <option value="never-smoke">Never Smoked</option>
                            <option value="occasional-smoke">Occasional Smoker</option>
                            <option value="regular-smoke">Regular Smoker</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Drinking Habits:</label>
                        <select name="drink" value={searchParams.drink} onChange={handleChange}>
                            <option value="">Any</option>
                            <option value="never-drink">Never Drinker</option>
                            <option value="occasional-drink">Occasional Drinker</option>
                            <option value="regular-drink">Regular Drinker</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Complexion:</label>
                        <input type="text" name="complexion" value={searchParams.complexion} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Mother Tongue:</label>
                        <input type="text" name="motherTongue" value={searchParams.motherTongue} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Family Status:</label>
                        <input type="text" name="familyStatus" value={searchParams.familyStatus} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Family Type:</label>
                        <input type="text" name="familyType" value={searchParams.familyType} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Family Values:</label>
                        <input type="text" name="familyValues" value={searchParams.familyValues} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Manglik:</label>
                        <input type="text" name="manglik" value={searchParams.manglik} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Disabilities:</label>
                        <input type="text" name="disabilities" value={searchParams.disabilities} onChange={handleChange} />
                    </div>
                    <div>
                    <br />
                    <button className='custom-button' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search_Header