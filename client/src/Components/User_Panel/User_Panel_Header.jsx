import React from 'react'

const User_Panel_Header = () => {
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
                                      <a className="active" href="/DashboardProfile">Profile Info</a>
                                  </li>
                                  <li>
                                      <a href="/notification">Notifications</a>
                                  </li>
                                  {/* <li>
                                      <a href="user-friend-request.html">Friend Requests</a>
                                  </li> */}
                                  {/* <li>
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
                                        <a href="/billing">Billing & Payout</a>
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
                        Profile Info
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="profile-about-box">
                                <div className="top-bg"></div>
                                <div className="p-inner-content">
                                    <div className="profile-img">
                                        <img src="assets/images/profile/profile-user.png" alt=""/>
                                        <div className="active-online"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="up-photo-card mb-30">
                                <div className="icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="content">
                                    <h4>
                                        Change Avatar
                                    </h4>
                                    <span>
                                        120x120p size minimum
                                    </span>
                                </div>
                            </div>
                            <div className="up-photo-card">
                                <div className="icon">
                                    <i className="fas fa-image"></i>
                                </div>
                                <div className="content">
                                    <h4>
                                        Change Cover
                                    </h4>
                                    <span>
                                        1200x300p size minimum
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-info-box mt-30">
                        <div className="header">
                            About your Profile
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Profile Name</label>
                                        <input type="text" placeholder="Profile Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Public Email</label>
                                        <input type="text" placeholder="Public Email"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <textarea name="" placeholder="Write a little description about you..."></textarea>
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
                                        <label for="">Birthday</label>
                                        <input type="date"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Occupation</label>
                                        <input type="text" placeholder="Occupation"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Status</label>
                                        <select name="" id="">
                                            <option value="">In a Relationship</option>
                                            <option value="">Single</option>
                                            <option value="">Marid</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Birthplace</label>
                                        <input type="text" placeholder="Birthplace"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-info-box mt-30">
                        <div className="header">
                            More info
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Age</label>
                                        <textarea name="" placeholder="Favourite TV Shows"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Height</label>
                                        <textarea name="" placeholder="Favourite Music Bands / Artists"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Posted by</label>
                                        <textarea name="" placeholder="Favourite Movies"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Religion / Community </label>
                                        <textarea name="" placeholder="Favourite Games "></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Location </label>
                                        <textarea name="" placeholder="Favourite Games"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Monther tongue </label>
                                        <textarea name="" placeholder="Favourite Games"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Diet </label>
                                        <textarea name="" placeholder="Favourite Games"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Health Information</label>
                                        <textarea name="" placeholder="Favourite Games"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-info-box mt-30">
                        <div className="header">
                            Family Details
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Father's Status</label>
                                        <textarea name="" placeholder="Favourite TV Shows"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Mother's Status</label>
                                        <textarea name="" placeholder="Favourite Music Bands / Artists"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Family Location</label>
                                        <textarea name="" placeholder="Favourite Movies"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Native Place </label>
                                        <textarea name="" placeholder="Favourite Games "></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">No. of Brothers </label>
                                        <textarea name="" placeholder="Favourite Games "></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">No. of Sisters </label>
                                        <textarea name="" placeholder="Favourite Games "></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Family Type </label>
                                        <textarea name="" placeholder="Favourite Games "></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-info-box mt-30">
                        <div className="header">
                            Jobs & Education
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Title or Place</label>
                                        <input type="text" placeholder="Title or Place"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Year Started</label>
                                        <select name="" id="">
                                            <option value="">2014</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Year End</label>
                                        <select name="" id="">
                                            <option value="">2017</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Description</label>
                                        <textarea name="" id="" placeholder="Description"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Title or Place</label>
                                        <input type="text" placeholder="Title or Place"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Year Started</label>
                                        <select name="" id="">
                                            <option value="">2014</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-input-box">
                                        <label for="">Year End</label>
                                        <select name="" id="">
                                            <option value="">2017</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-input-box">
                                        <label for="">Description</label>
                                        <textarea name="" id="" placeholder="Description"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons  mt-30">
                        <button type="submit" className="custom-button">Save Changes</button>
                        <button className="custom-button2">Discard All</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default User_Panel_Header