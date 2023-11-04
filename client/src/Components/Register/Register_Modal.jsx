import React from 'react'

const Register_Modal = () => {
    return (
        <div>
            <div className="modal fade" id="email-confirm" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="top-img">
                                <img src="assets/images/c-image.png" alt=""/>
                            </div>
                            <div className="main-content">
                                <h4 className="title">
                                    Check Your Inbox, Please!
                                </h4>
                                <p>
                                    A link to verify account has been sent to the email supplied. Please open the link and follow the prompts
                                    to verify
                                    email.
                                </p>
                                <p className="send-again">
                                    Didn't get e-mail? <a href="#">
                                        Send it again
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register_Modal