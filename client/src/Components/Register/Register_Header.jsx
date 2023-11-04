import React from 'react'

const Register_Header = () => {
  return (
    <div>
          <section className="log-reg">
    <div className="top-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <a href="/" className="backto-home"><i className="fas fa-chevron-left"></i> Back to My Lovodi</a>
          </div>
          <div className="col-lg-7 ">
            <div className="logo">
              <img src="assets/images/logo2.png" alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-end">
        <div className="image">
        </div>
        <div className="col-lg-7">
          <div className="log-reg-inner">
            <div className="section-header">
              <h2 className="title">
                Welcome to My Lovodi
              </h2>
              <p>
                Let's create your profile! Just fill in the fields below, and
                we’ll get a new account.
              </p>
            </div>
            <div className="main-content">
              <form action="#">
                <h4 className="content-title">Acount Details</h4>
                <div className="form-group">
                  <label for="">Username*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Usewrname"/>
                </div>
                <div className="form-group">
                  <label for="">Email Address*</label>
                  <input type="email" className="my-form-control" placeholder="Enter Your Email"/>
                </div>
                <div className="form-group">
                  <label for="">Password*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Password"/>
                </div>
                <div className="form-group">
                  <label for="">Confirm Password*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Password"/>
                </div>
                <h4 className="content-title mt-5">Profile Details</h4>
                <div className="form-group">
                  <label for="">Name*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your Full Name"/>
                </div>
                <div className="form-group">
                  <label for="">Birthday*</label>
                  <input type="date" className="my-form-control"/>
                </div>
                <div className="form-group">
                  <label for="">I am a*</label>
                  <div className="option">
                    <div className="s-input mr-3">
                      <input type="radio" name="gender1" id="males1"/><label for="males1">Man</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="gender1" id="females1"/><label for="females1">Woman</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="">Looking for a*</label>
                  <div className="option">
                    <div className="s-input mr-3">
                      <input type="radio" name="gender2" id="males"/><label for="males">Man</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="gender2" id="females"/><label for="females">Woman</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="">Marial status*</label>
                  <div className="option">
                    <div className="s-input nice-select-wraper">
                      <select className="select-bar">
                        <option value="">Single</option>
                        <option value="">Marid</option>
                        <option value="">Marid</option>
                        <option value="">Marid</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="">City*</label>
                  <input type="text" className="my-form-control" placeholder="Enter Your City"/>
                </div>
                <button className="custom-button" data-toggle="modal" data-target="#email-confirm">Create Your
                  Profile</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Register_Header