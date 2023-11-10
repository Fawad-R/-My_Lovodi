import React from 'react'

const Purchase_Header = () => {
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
                                                    <a  href="/billing">Billing & Payout</a>
                                                </li>
                                                <li>
                                                    <a href="/myplan">Upgrade Membership Plan</a>
                                                </li>
                                                <li>
                                                    <a className="active" href="/purchaseHistory">View Purchase History</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-7 ">
                            <div className="page-title">
                            View purchase history
                            </div>
                            <div className="input-info-box mt-30">
                        <div className="my-table">
                            <div className="table-filter">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="my-input-box">
                                            <label for="">Form Date</label>
                                            <input type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="my-input-box">
                                            <label for="">Form Date</label>
                                            <input type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <button className="custom-button"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                      <tr>
                                          <th>DATE</th>
                                          <th>ITEM</th>
                                          <th>TYPE</th>
                                          <th>CODE</th>
                                          <th>PRICE</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td className="gray">Nov 15th, 2021</td>
                                          <td className="green">Subscriptions Plan</td>
                                          <td className="dark">Purchase</td>
                                          <td className="gray">VK1287</td>
                                          <td className="dark">$34</td>
                                      </tr>
                                      <tr>
                                          <td className="gray">Nov 15th, 2021</td>
                                          <td className="green">Subscriptions Plan</td>
                                          <td className="dark">Purchase</td>
                                          <td className="gray">VK1287</td>
                                          <td className="dark">$34</td>
                                      </tr>
                                      <tr>
                                          <td className="gray">Nov 15th, 2021</td>
                                          <td className="green">Subscriptions Plan</td>
                                          <td className="dark">Purchase</td>
                                          <td className="gray">VK1287</td>
                                          <td className="dark">$34</td>
                                      </tr>
                                      <tr>
                                          <td className="gray">Nov 15th, 2021</td>
                                          <td className="green">Subscriptions Plan</td>
                                          <td className="dark">Purchase</td>
                                          <td className="gray">VK1287</td>
                                          <td className="dark">$34</td>
                                      </tr>
                                      <tr>
                                          <td className="gray">Nov 15th, 2021</td>
                                          <td className="green">Subscriptions Plan</td>
                                          <td className="dark">Purchase</td>
                                          <td className="gray">VK1287</td>
                                          <td className="dark">$34</td>
                                      </tr>
                                      <tr>
                                          <td className="gray">Nov 15th, 2021</td>
                                          <td className="green">Subscriptions Plan</td>
                                          <td className="dark">Purchase</td>
                                          <td className="gray">VK1287</td>
                                          <td className="dark">$34</td>
                                      </tr>
                                  </tbody>
                                </table>
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

export default Purchase_Header