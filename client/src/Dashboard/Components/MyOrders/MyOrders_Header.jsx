import React from 'react'

const MyOrders_Header = () => {
    return (
        <div>
            <section className="user-setting-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-5">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <button className="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div className="icon">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <span>My Profile</span>
                                            <div className="t-icon">
                                                <i className="fas fa-plus"></i>
                                                <i className="fas fa-minus"></i>
                                            </div>
                                        </button>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <ul className="links">
                                                {/* <li>
                                                    <a href="user-setting.html">Profile Info</a>
                                                </li> */}
                                                <li>
                                                    <a href="/notification">Notifications</a>
                                                </li>
                                                {/* <li>
                                                    <a href="user-friend-request.html">Friend Requests</a>
                                                </li>
                                                <li>
                                                    <a href="user-badges.html">Badges</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <div className="icon">
                                                <i className="fas fa-cogs"></i>
                                            </div>
                                            <span>
                                                Account
                                            </span>
                                            <div className="t-icon">
                                                <i className="fas fa-plus"></i>
                                                <i className="fas fa-minus"></i>
                                            </div>
                                        </button>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <ul className="links">
                                                {/* <li>
                                                    <a href="/">Account Info</a>
                                                </li> */}
                                                <li>
                                                    <a href="#">Change Password</a>
                                                </li>
                                                <li>
                                                    <a href="#">Privacy Settings</a>
                                                </li>
                                                {/* <li>
                                                    <a href="user-verify-account.html">Verified account</a>
                                                </li>
                                                <li>
                                                    <a href="user-close-account.html">Close Account</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <div className="icon">
                                                <i className="far fa-credit-card"></i>
                                            </div>
                                            <span>
                                                Subscriptions & Payments
                                            </span>
                                            <div className="t-icon">
                                                <i className="fas fa-plus"></i>
                                                <i className="fas fa-minus"></i>
                                            </div>
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <ul className="links">
                                                <li>
                                                    <a href="/billing">Billing & Payout</a>
                                                </li>
                                                <li>
                                                    <a className="active" href="/myplan">Upgrade Membership Plan</a>
                                                </li>
                                                {/* <li>
                                                    <a href="user-purchase.html">View Purchase History</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-7 ">
                            <div className="page-title">
                                Upgrade Membership Plan
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            1 Month
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>2.99
                                        </h4>
                                        <p className="stamet">
                                            Per Month
                                        </p>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            3 Month
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>4.99
                                        </h4>
                                        <p className="stamet">
                                            Per Month
                                        </p>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            6 Month
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>5.99
                                        </h4>
                                        <p className="stamet">
                                            Per Month
                                        </p>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            12 Month
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>7.99
                                        </h4>
                                        <p className="stamet">
                                            Per Month
                                        </p>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt=""/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default MyOrders_Header