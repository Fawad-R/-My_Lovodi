import React, { useState } from 'react';
import '../Style/Matches/Matches_Sidebar.css';
// Import your CSS file

const Matches_Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className='Matches_Sidebar'>
            {/* <div className={`Matches_Sidebar ${isSidebarOpen ? 'open' : ''}`}> */}

                <div >

                    {/* <div className="sidebar-toggle" onClick={toggleSidebar}>
                        <div className={`hamburger ${isSidebarOpen ? 'open' : ''}`}>
                            <span>as</span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> */}
                    <div className="sections">
                        <div className="section-heading card-header">Photo Settings</div>
                        <div className="section">
                            <input type="radio" name="visible-to-all" />
                            <label>Visible to all(1000+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="visible-to-all" />
                            <label>Protected Phot...(54)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="visible-to-all" />
                            <label>All</label>
                        </div>
                        <div className="section-heading card-header">Recently Joined</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Within a day(112)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Within a week(493)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Within a Month(493)</label>
                        </div>
                        <div className="section-heading card-header">Active Members</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Within a day(500+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Within a Week(493)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Within a Month(493)</label>
                        </div>

                        <div className="section-heading card-header">Annual Income</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>INR 4 Lakh to ...(143)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>INR 7 Lakh to ...(143)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>INR 10 Lakh to ...(143)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Within a Month(493)</label>
                        </div>
                        {/* <div className="section">More Select More</div> */}
                        <div className="section-heading card-header">Marital Status</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Never Married(2000+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Divorced(190)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Awaiting Divor...(85)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Annulled(42)</label>
                        </div>
                        <div className="section-heading card-header">Religion</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Islam</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Sikh(2000+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Hindu(2000+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Christian(67)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>No Religion(20)</label>
                        </div>

                        <div className="section-heading card-header">Community</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Sunni(369)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Sheikh(235)</label>
                        </div>

                        <div className="section-heading card-header">Mother Tongue</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Urdu(115)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>Punjabi(235)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label>English(235)</label>
                        </div>
                        <div className="section-heading card-header">Country Living in</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">India(251</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Pakistan(1000+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Pakistan(1000+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Germany(8)</label>
                        </div>
                        <br />
                        <div className="section-heading card-header">State Living in</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Punjab(8)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Telangana(8)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Karnataka(8)</label>
                        </div>
                        <br />
                        <div className="section-heading card-header">Country Grew up in</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Pakistam(8)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">India(8)</label>
                        </div>
                        <br />
                        <div className="section-heading card-header">Working With</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Private Compan...(500+)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Defense / Civi...(20)</label>
                        </div>
                        <br />
                        <div className="section-heading card-header">Profession Area</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">IT & Software ...(118)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Others(186)</label>
                        </div>
                        <br />
                        <div className="section-heading card-header">Profile Created by</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Self(118)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Sibling(186)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Parent(186)</label>
                        </div>
                        <br />
                        <div className="section-heading card-header">Eating habits</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Non-Veg(118)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Veg(186)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Eggetarian(186)</label>
                        </div>
                        <br />
                        <div className="section-heading card-header">Education Level</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Bachelor(118)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Master(186)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Diploma(186)</label>
                        </div>
                        <div className="section-heading card-header">Education Area</div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Engineering(118)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Management(186)</label>
                        </div>
                        <div className="section">
                            <input type="radio" name="recently-joined" />
                            <label htmlFor="">Computers / IT(186)</label>
                        </div>

                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Matches_Sidebar;
