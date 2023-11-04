import React from 'react'
import Membership_Plan from '../../Plans_Components/Membership_Plan'
import Profile_Booster_Plan from '../../Plans_Components/Profile_Booster_Plan'
import View_contact_Plan from '../../Plans_Components/View_contact_Plan'
import Block_Requests_Plan from '../../Plans_Components/Block_Requests_Plan'

const Memebership_Header = () => {
    return (
        <div>
            <section className="membership-section">
                

                    <Membership_Plan />
                    <Profile_Booster_Plan />
                    <View_contact_Plan />
                    <Block_Requests_Plan />

                <div className="pricing-plans">
                    <img className="shape1" src="assets/images/join/heartshape.png" alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="contact-link">
                                    If you have any questions <a href="#">Contact Us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Memebership_Header