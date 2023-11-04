import React, { useState } from 'react';
import '../Style/Matches/Matches_Sidebar.css';
// Import your CSS file

const Inbox_Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className='Matches_Sidebar'>
            <div >
                <div className="sections">
                    <div className="section-heading card-header">Sort</div>
                    <div className="section">
                        <input type="radio" name="visible-to-all" />
                        <label>Most relevant</label>
                    </div>
                    <div className="section">
                        <input type="radio" name="visible-to-all" />
                        <label>Newest first</label>
                    </div>
                    <div className="section">
                        <input type="radio" name="visible-to-all" />
                        <label>Oldest first</label>
                    </div>
                    <div className="section-heading card-header">Filters</div>
                    <div className="section">
                        <input type="radio" name="recently-joined" />
                        <label>All Requests</label>
                    </div>
                    <div className="section">
                        <input type="radio" name="recently-joined" />
                        <label>Premium Members</label>
                    </div>
                    <div className="section">
                        <input type="radio" name="recently-joined" />
                        <label>Members online now</label>
                    </div>
                    <div className="section">
                        <input type="radio" name="recently-joined" />
                        <label>Phone verified Members</label>
                    </div>
                    <div className="section">
                        <input type="radio" name="recently-joined" />
                        <label>Members with Photos</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbox_Sidebar;
