import React from 'react'

const Community_Single_Header = () => {
    return (
        <div>
            <div className="single-community-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="top-menu">
                                <li>
                                    <a href="single-profile.html" className="active">
                                        Activity
                                    </a>
                                </li>
                                <li>
                                    <a href="single-profile2.html">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="single-profile3.html">
                                        Friends
                                        <div className="num">04</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="profile-notfound.html">
                                        Groups
                                        <div className="num">14</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="profile-notfound.html">
                                        Media
                                        <div className="num">47</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Community_Single_Header