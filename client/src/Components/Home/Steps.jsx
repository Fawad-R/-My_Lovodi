import React from 'react'

const Steps = () => {
  return (
    <div>
        <section className="how-it-work-section">
        <img className="shape1" src="assets/images/h-it-w/circle-shape.png" alt=""/>
        <img className="shape2" src="assets/images/h-it-w/bird.png" alt=""/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="section-header">
                            <h6 className="sub-title extra-padding wow fadeInUp">
                                Meet New People Today!
                            </h6>
                            <h2 className="title wow fadeInUp">
                                How Does It Work?
                            </h2>
                            <p className="text wow fadeInUp">
                                You’re just 3 steps away from a great date
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.1s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon1.png" alt=""/>
                            <div className="number">
                                01
                            </div>
                        </div>
                        <h4 className="title">
                            Tell us who you are!
                        </h4>
                        <a href="#" className="custom-button">Join Now !</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon2.png" alt=""/>
                            <div className="number">
                                02
                            </div>
                        </div>
                        <h4 className="title">
                            Find the right person
                        </h4>
                        <a href="#" className="custom-button">Join Now !</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.3s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon3.png" alt=""/>
                            <div className="number">
                                03
                            </div>
                        </div>
                        <h4 className="title">
                            Start Dating
                        </h4>
                        <a href="#" className="custom-button">Join Now !</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </div>
  )
}

export default Steps