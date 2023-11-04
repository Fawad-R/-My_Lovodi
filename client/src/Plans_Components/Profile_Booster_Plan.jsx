import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const Profile_Booster_Plan = () => {
    return (
        <div style={{ marginTop: '200px' }}>
            <div className=" container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title extra-padding">
                                    Reach More Peoples
                                </h6>
                                <h2 className="title">
                                    Profile Booster Plans
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pricing-plan-wrapper">
                            <img className="left-img" src="assets/images/membership/left-img.png" alt="" />
                            <img className="right-img" src="assets/images/membership/right-img.png" alt="" />
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            {/* Trial Plan */}
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>1.5
                                        </h4>
                                        <p className="stamet">
                                            1 Week
                                        </p>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            {/* Trial Plan */}
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>2
                                        </h4>
                                        <p className="stamet">
                                            2 Weeks
                                        </p>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            {/* Trial Plan */}
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>3.50
                                        </h4>
                                        <p className="stamet">
                                            4 Weeks
                                        </p>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile_Booster_Plan