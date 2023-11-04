import React from 'react'

const Banner = () => {
    return (
        <div>
            <section className="banner-section">
                <img className="img1 wow fadeInLeft" src="assets/images/banner/aimg1.png" alt=""/>
                    <img className="img2 wow fadeInRight" src="assets/images/banner/aimg2.png" alt=""/>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <h1 className="main-title wow fadeInLeft">
                                        Find Love
                                        Your Life
                                    </h1>
                                    <div className="join-now-box wow fadeInUp">
                                        <div className="single-option">
                                            <p className="title">
                                                I am a :
                                            </p>
                                            <div className="option">
                                                <div className="s-input mr-3">
                                                    <input type="radio" name="gender" id="male" />
                                                    <label for="male" >Male</label>
                                            </div>
                                            <div className="s-input">
                                                <input type="radio" name="gender" id="female" />
                                                <label for="female" >Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-option gender">
                                    <p className="title">
                                        Seeking a :
                                    </p>
                                    <div className="option">
                                        <div className="s-input mr-4">
                                            <input type="radio" name="seeking" id="males"/><label for="males">Man</label>
                                        </div>
                                        <div className="s-input">
                                            <input type="radio" name="seeking" id="females"/><label for="females">Woman</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-option age">
                                    <p className="title">
                                        Ages :
                                    </p>
                                    <div className="option">
                                        <div className="s-input mr-3">
                                            <select className="select-bar">
                                                <option value="">18</option>
                                                <option value="">20</option>
                                                <option value="">24</option>
                                            </select>
                                        </div>
                                        <div className="separator">
                                            -
                                        </div>
                                        <div className="s-input ml-3">
                                            <select className="select-bar">
                                                <option value="">30</option>
                                                <option value="">35</option>
                                                <option value="">40</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-option last">
                                    <p className="title">
                                        Country :
                                    </p>
                                    <div className="option">
                                        <div className="s-input mr-3">
                                            <select className="select-bar">
                                                <option>Select Country</option>
                                                <option value="">India</option>
                                                <option value="">Japan</option>
                                                <option value="">England</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="joun-button">
                                    <button className="custom-button">Join Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banner