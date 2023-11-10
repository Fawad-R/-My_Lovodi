import React from 'react'
import '../../Style/Home/Banner.css'
const Banner = () => {
    return (
        <div>
            <section className="banner-section">
                <img className="img1 wow fadeInLeft" src="assets/images/banner/aimg1.png" alt="" />
                <img className="img2 wow fadeInRight" src="assets/images/banner/aimg2.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <h1 className="main-title wow fadeInLeft">
                                Find Love
                                Your Life
                            </h1>
                            <div className="join-now-box wow fadeInUp">
                                <div className="single-option">
                                    <p className="title">
                                        I am a :
                                    </p>
                                    <div className="option">
                                        <div className="s-input mr-3">
                                            <input type="radio" name="gender" id="male" />
                                            <label for="male" >Male</label>
                                        </div>
                                        <div className="s-input">
                                            <input type="radio" name="gender" id="female" />
                                            <label for="female" >Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-option gender">
                                    <p className="title">
                                        Seeking a :
                                    </p>
                                    <div className="option">
                                        <div className="s-input mr-4">
                                            <input type="radio" name="seeking" id="males" /><label for="males">Man</label>
                                        </div>
                                        <div className="s-input">
                                            <input type="radio" name="seeking" id="females" /><label for="females">Woman</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-option age">
                                    <p className="title">
                                        Ages :
                                    </p>
                                    <div className="option">
                                        <div className="s-input mr-3">
                                            <select className="select-bar2">
                                                <option value="">18</option>
                                                <option value="">19</option>
                                                <option value="">20</option>
                                                <option value="">21</option>
                                                <option value="">22</option>
                                                <option value="">23</option>
                                                <option value="">24</option>
                                                <option value="">25</option>
                                                <option value="">26</option>
                                                <option value="">27</option>
                                                <option value="">28</option>
                                                <option value="">29</option>
                                            </select>
                                        </div>
                                        <div className="separator">
                                            -
                                        </div>
                                        <div className="s-input ml-3">
                                            <select className="select-bar2">
                                                <option value="">30</option>
                                                <option value="">31</option>
                                                <option value="">32</option>
                                                <option value="">33</option>
                                                <option value="">34</option>
                                                <option value="">35</option>
                                                <option value="">36</option>
                                                <option value="">37</option>
                                                <option value="">38</option>
                                                <option value="">39</option>
                                                <option value="">40</option>
                                                <option value="">41</option>
                                                <option value="">42</option>
                                                <option value="">43</option>
                                                <option value="">44</option>
                                                <option value="">45</option>
                                                <option value="">46</option>
                                                <option value="">47</option>
                                                <option value="">48</option>
                                                <option value="">49</option>
                                                <option value="">50</option>
                                                <option value="">51</option>
                                                <option value="">52</option>
                                                <option value="">53</option>
                                                <option value="">54</option>
                                                <option value="">55</option>
                                                <option value="">56</option>
                                                <option value="">57</option>
                                                <option value="">58</option>
                                                <option value="">59</option>
                                                <option value="">60</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-option last">
                                    <p className="title">
                                        Country :
                                    </p>
                                    <div className="option">
                                        <div className="s-input mr-3">
                                        {/* select-bar  */}
                                            <select className="select-bar2">
                                                <option>Select Country</option>
                                                {/* <option value="">India</option>
                                                <option value="">Japan</option>
                                                <option value="">England</option> */}
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                                <option>Andorra</option>
                                                <option>Angola</option>
                                                <option> Antigua and Barbuda</option>
                                                <option>Argentina</option>
                                                <option>Armenia</option>
                                                <option>Australia</option>
                                                <option>Austria</option>
                                                <option>Azerbaijan</option>
                                                <option>The Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                                <option>Belarus</option>
                                                <option>Belgium</option>
                                                <option>Belize</option>
                                                <option>Benin</option>
                                                <option>Bhutan</option>
                                                <option>Bolivia</option>
                                                <option>Bosnia and Herzegovina</option>
                                                <option>Botswana</option>
                                                <option>Brazil</option>
                                                <option>Brunei</option>
                                                <option>Bulgaria</option>
                                                <option>Burkina Faso</option>
                                                <option>Burundi</option>
                                                <option>Cabo Verde</option>
<option>Cambodia</option>
<option>Cameroon</option>
<option>Canada</option>
<option>Central African Republic</option>
<option>Chad</option>
<option>Chile</option>
<option>China</option>
<option>Colombia</option>
<option>Comoros</option>
<option>Congo, Democratic Republic of the</option>
<option>Congo, Republic of the</option>
<option>Costa Rica</option>
<option>Côte d’Ivoire</option>
<option>Croatia</option>
<option>Cuba</option>
<option>Cyprus</option>
<option>Czech Republic</option>
<option>Denmark</option>
<option>Djibouti</option>
<option>Dominica</option>
<option>Dominican Republic</option>
<option>East Timor (Timor-Leste)</option>
<option>Ecuador</option>
<option>Egypt</option>
<option>El Salvador</option>
<option>Equatorial Guinea</option>
<option>Eritrea</option>
<option>Estonia</option>
<option>Eswatini</option>
<option>Ethiopia</option>
<option>Fiji</option>
<option>Finland</option>
<option>France</option>
<option>Gabon</option>
<option>The Gambia</option>
<option>Georgia</option>
<option>Germany</option>
<option>Ghana</option>
<option>Greece</option>
<option>Grenada</option>
<option>Guatemala</option>
<option>Guinea</option>
<option>Guinea-Bissau</option>
<option>Guyana</option>
<option>Haiti</option>
<option>Honduras</option>
<option>Hungary</option>
<option>Iceland</option>
<option>India</option>
<option>Indonesia</option>
<option>Iran</option>
<option>Iraq</option>
<option>Ireland</option>
<option>Israel</option>
<option>Italy</option>
<option>Jamaica</option>
<option>Japan</option>
<option>Jordan</option>
<option>Kazakhstan</option>
<option>Kenya</option>
<option>Kiribati</option>
<option>Korea, North</option>
<option>Korea, South</option>
<option>Kosovo</option>
<option>Kuwait</option>
<option>Kyrgyzstan</option>
<option>Laos</option>
<option>Latvia</option>
<option>Lebanon</option>
<option>Lesotho</option>
<option>Liberia</option>
<option>Libya</option>
<option>Liechtenstein</option>
<option>Lithuania</option>
<option>Luxembourg</option>
<option>Madagascar</option>
<option>Malawi</option>
<option>Malaysia</option>
<option>Maldives</option>
<option>Mali</option>
<option>Malta</option>
<option>Marshall Islands</option>
<option>Mauritania</option>
<option>Mauritius</option>
<option>Mexico</option>
<option>Micronesia, Federated States of</option>
<option>Moldova</option>
<option>Monaco</option>
<option>Mongolia</option>
<option>Montenegro</option>
<option>Morocco</option>
<option>Mozambique</option>
<option>Myanmar (Burma)</option>
<option>Namibia</option>
<option>Nauru</option>
<option>Nepal</option>
<option>Netherlands</option>
<option>New Zealand</option>
<option>Nicaragua</option>
<option>Niger</option>
<option>Nigeria</option>
<option>North Macedonia</option>
<option>Norway</option>
<option>Oman</option>
<option>Pakistan</option>
<option>Palau</option>
<option>Panama</option>
<option>Papua New Guinea</option>
<option>Paraguay</option>
<option>Peru</option>
<option>Philippines</option>
<option>Poland</option>
<option>Portugal</option>
<option>Qatar</option>
<option>Romania</option>
<option>Russia</option>
<option>Rwanda</option>
<option>Saint Kitts and Nevis</option>
<option>Saint Lucia</option>
<option>Saint Vincent and the Grenadines</option>
<option>Samoa</option>
<option>San Marino</option>
<option>Sao Tome and Principe</option>
<option>Saudi Arabia</option>
<option>Senegal</option>
<option>Serbia</option>
<option>Seychelles</option>
<option>Sierra Leone</option>
<option>Singapore</option>
<option>Slovakia</option>
<option>Slovenia</option>
<option>Solomon Islands</option>
<option>Somalia</option>
<option>South Africa</option>
<option>Spain</option>
<option>Sri Lanka</option>
<option>Sudan</option>
<option>Sudan, South</option>
<option>Suriname</option>
<option>Sweden</option>
<option>Switzerland</option>
<option>Syria</option>
<option>Taiwan</option>
<option>Tajikistan</option>
<option>Tanzania</option>
<option>Thailand</option>
<option>Togo</option>
<option>Tonga</option>
<option>Trinidad and Tobago</option>
<option>Tunisia</option>
<option>Turkey</option>
<option>Turkmenistan</option>
<option>Tuvalu</option>
<option>Uganda</option>
<option>Ukraine</option>
<option>United Arab Emirates</option>
<option>United Kingdom</option>
<option>United States</option>
<option>Uruguay</option>
<option>Uzbekistan</option>
<option>Vanuatu</option>
<option>Vatican City</option>
<option>Venezuela</option>
<option>Vietnam</option>
<option>Yemen</option>
<option>Zambia</option>
<option>Zimbabwe</option>






                                            </select>
                                            <div class="vertical-slider">
                <div class="slider-track">
                    <div class="slider-thumb"></div>
                </div>
            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="joun-button">
                                    <button className="custom-button">Join Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banner