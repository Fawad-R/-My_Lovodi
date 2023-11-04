import React from 'react'

const Billing_Header = () => {
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
                                                <li>
                                                    <a href="/DashboardProfile">Profile Info</a>
                                                </li>
                                                <li>
                                                    <a href="/notification">Notifications</a>
                                                </li>
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
                                                    <a href="user-account-info.html">Account Info</a>
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
                                                    <a className="active" href="/billing">Billing & Payout</a>
                                                </li>
                                                <li>
                                                    <a href="/myplan">Upgrade Membership Plan</a>
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
                                Billing & Payout
                            </div>

                            <div className="input-info-box mt-30">
                                <div className="header">
                                    Provide your payment info
                                </div>
                                <div className="content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">First Name</label>
                                                <input type="text" placeholder="First Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">Last Name</label>
                                                <input type="text" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">Country</label>
                                                <select name="" id="">
                                                    <option value="" disabled="" selected="">Select Country</option>
                                                    <option value="">United State</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">City</label>
                                                <select name="" id="">
                                                    <option value="" disabled="" selected="">Select City</option>
                                                    <option value="">New Work</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">Email</label>
                                                <input type="text" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">Phone</label>
                                                <input type="text" placeholder="Phone"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="input-info-box mt-30">
                                <div className="header">
                                    Payment Options
                                </div>
                                <div className="content">
                                    <div className="select-payment">
                                        <div className="option">
                                            <i className="fas fa-check-circle"></i>
                                            <img src="assets/images/card1.png" alt=""/>
                                                Credit Card
                                        </div>
                                        <div className="option">
                                            <i className="fas fa-check-circle"></i>
                                            <img src="assets/images/card1.png" alt=""/>
                                                Debit Card
                                        </div>
                                        <div className="option">
                                            <i className="fas fa-check-circle"></i>
                                            <img src="assets/images/card2.png" alt=""/>
                                                Paypal
                                        </div>
                                    </div>
                                    <div className="header">
                                        Enter your Card Details
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="my-input-box">
                                                <label for="">Card Number</label>
                                                <input type="email" placeholder="0000 0000 0000 0000"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="my-input-box">
                                                <label for="">Name</label>
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">Expiration</label>
                                                <input type="text" placeholder="MM/YY"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="my-input-box">
                                                <label for="">CVV</label>
                                                <input type="text" placeholder="CVV"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons  mt-30">
                                <button type="submit" className="custom-button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Billing_Header