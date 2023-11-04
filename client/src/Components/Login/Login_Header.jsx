import React from 'react'

const Login_Header = () => {
    return (
        <div>
            <section className="log-reg">
                <div className="top-menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <a href="index.html" className="backto-home"><i className="fas fa-chevron-left"></i> Back to My Lovodi</a>
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
                        <div className="image image-log">
                        </div>
                        <div className="col-lg-7">
                            <div className="log-reg-inner">
                                <div className="section-header inloginp">
                                    <h2 className="title">
                                        Welcome to My Lovodi
                                    </h2>
                                </div>
                                <div className="main-content inloginp">
                                    <form action="#">
                                        <div className="form-group">
                                            <label for="">Your Address</label>
                                            <input type="email" className="my-form-control" placeholder="Enter Your Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="">Password</label>
                                            <input type="text" className="my-form-control" placeholder="Enter Your Password"/>
                                        </div>
                                        <p className="f-pass">
                                            Forgot your password? <a href="#">recover password</a>
                                        </p>
                                        <div className="button-wrapper">
                                            <button type="submit" className="custom-button">Sign IN</button>
                                        </div>
                                        <div className="or">
                                            <p>OR</p>
                                        </div>
                                        <div className="or-content">
                                            <p>Sign up with your email</p>
                                            <a href="#" className="or-btn"><img src="assets/images/google.png" alt=""/> Sign Up with Google</a>
                                            <p className="or-signup">
                                                Don't have an account? <a href="register.html">
                                                    Sign up here
                                                </a>
                                            </p>
                                        </div>
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

export default Login_Header