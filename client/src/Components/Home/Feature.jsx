import React from 'react'

const Feature = () => {
    return (
        <div>
            <section className="feature-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon01.png" alt=""/>
                                </div>
                                <h4>
                                    100% Verifide
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon02.png" alt=""/>
                                </div>
                                <h4>
                                    Most Secure
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon03.png" alt=""/>
                                </div>
                                <h4>
                                    100% Privacy
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon04.png" alt=""/>
                                </div>
                                <h4>
                                    Smart Matching
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Feature