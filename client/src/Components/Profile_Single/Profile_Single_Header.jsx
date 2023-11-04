import React from 'react'

const Profile_Single_Header = () => {
    return (
        <div>
            <section className="profile-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-5 col-md-7">
                            <div className="left-profile-area">
                                <div className="profile-about-box">
                                    <div className="top-bg"></div>
                                    <div className="p-inner-content">
                                        <div className="profile-img">
                                            <img src="assets/images/profile/profile-user.png" alt=""/>
                                                <div className="active-online"></div>
                                        </div>
                                        <h5 className="name">
                                            Albert Don
                                        </h5>
                                        <ul className="p-b-meta-one">
                                            <li>
                                                <span>21 Years Old</span>
                                            </li>
                                            <li>
                                                <span> <i className="fas fa-map-marker-alt"></i>Paris,France</span>
                                            </li>
                                        </ul>
                                        <div className="p-b-meta-two">
                                            <div className="left">
                                                <div className="icon">
                                                    <i className="far fa-heart"></i>
                                                </div> 257
                                            </div>
                                            <div className="right">
                                                <a href="#" className="custom-button">
                                                    <i className="fab fa-cloudversify"></i> Get Premium
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-meta-box">
                                    <ul className="p-m-b">
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#usermessage">
                                                <i className="far fa-envelope"></i>
                                                <div className="number">04</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#usernotification">
                                                <i className="far fa-bell"></i>
                                                <div className="number">04</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-cogs"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile-uplodate-photo">
                                    <h4 className="p-u-p-header">
                                        <i className="fas fa-camera"></i> 21 Upload Photos
                                    </h4>
                                    <div className="p-u-p-list">
                                        <div className="my-col">
                                            <div className="img">
                                                <img src="assets/images/profile/up1.jpg" alt=""/>
                                                    <div className="overlay">
                                                        <a href="assets/images/profile/up1.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="my-col">
                                            <div className="img">
                                                <img src="assets/images/profile/up2.jpg" alt=""/>
                                                    <div className="overlay">
                                                        <a href="assets/images/profile/up2.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="my-col">
                                            <div className="img">
                                                <img src="assets/images/profile/up3.jpg" alt=""/>
                                                    <div className="overlay">
                                                        <a href="assets/images/profile/up3.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="my-col">
                                            <div className="img">
                                                <img src="assets/images/profile/up4.jpg" alt=""/>
                                                    <div className="overlay">
                                                        <a href="assets/images/profile/up4.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="my-col">
                                            <div className="img">
                                                <img src="assets/images/profile/up5.jpg" alt=""/>
                                                    <div className="overlay">
                                                        <a href="assets/images/profile/up5.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="my-col">
                                            <div className="img">
                                                <img src="assets/images/profile/up6.jpg" alt=""/>
                                                    <div className="overlay">
                                                        <a href="assets/images/profile/up6.jpg" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="profile-main-content">
                                <ul className="top-menu">
                                    <li>
                                        <a href="single-profile.html">
                                            Activity
                                        </a>
                                    </li>
                                    <li>
                                        <a href="single-profile2.html" className="active">
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="single-profile3.html">
                                            Friends
                                            <div className="num">04</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile-notfound.html">
                                            Groups
                                            <div className="num">14</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile-notfound.html">
                                            Media
                                            <div className="num">47</div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="info-box">
                                    <div className="header">
                                        <h4 className="title">
                                            Base
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <ul className="infolist">
                                            <li>
                                                <span>
                                                    Name
                                                </span>
                                                <span>
                                                    Albert Don
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Birthday
                                                </span>
                                                <span>
                                                    1998-01-19
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    I am a
                                                </span>
                                                <span>
                                                    Man
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Looking for a
                                                </span>
                                                <span>
                                                    Woman
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Marital status
                                                </span>
                                                <span>
                                                    single
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Country
                                                </span>
                                                <span>
                                                    France
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    City
                                                </span>
                                                <span>
                                                    Paris
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="header">
                                        <h4 className="title">
                                            Myself Summary
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <p className="text">
                                            I don`t like talk too much to be honest and
                                            especially about myself. I am man of actions, I do a lot of sports, I adore to travel and to see the world.
                                        </p>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="header">
                                        <h4 className="title">
                                            Lifestyle
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <ul className="infolist">
                                            <li>
                                                <span>
                                                    Interests
                                                </span>
                                                <span>
                                                    Billiards
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Looking for
                                                </span>
                                                <span>
                                                    Just friends
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Smoking
                                                </span>
                                                <span>
                                                    Never
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Language
                                                </span>
                                                <span>
                                                    English
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="header">
                                        <h4 className="title">
                                            Physical
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <ul className="infolist">
                                            <li>
                                                <span>
                                                    Height
                                                </span>
                                                <span>
                                                    5’10
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Weight
                                                </span>
                                                <span>
                                                    71
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Hair Color
                                                </span>
                                                <span>
                                                    Black
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Eye Color
                                                </span>
                                                <span>
                                                    Brown
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Body Type
                                                </span>
                                                <span>
                                                    Tall
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Ethnicity
                                                </span>
                                                <span>
                                                    Middle Eastern
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-md-7">
                            <div className="profile-aside-area">
                                <div className="other-profile">
                                    <div className="o-p-header">
                                        <h6 className="title">
                                            You may like
                                        </h6>
                                    </div>
                                    <div className="o-p-content">
                                        <div className="p-u-p-list-slider owl-carousel">
                                            <div className="slider-item">
                                                <div className="p-u-p-list">
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img1.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img2.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img3.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img4.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img5.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img6.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img7.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img8.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="p-u-p-list">
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img1.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img2.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img3.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img4.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img5.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img6.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img7.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="my-col">
                                                        <div className="img">
                                                            <img src="assets/images/profile/op-img8.png" alt=""/>
                                                                <a href="#" className="light-box mfp-iframe"><i className="fas fa-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-request">
                                    <div className="c-r-heading">
                                        <h6 className="title">
                                            <i className="far fa-comments"></i> Chat Request
                                        </h6>
                                    </div>
                                    <div className="c-r-content">
                                        <div className="c-r-content-list">
                                            <div className="single-c-r">
                                                <div className="left">
                                                    <img src="assets/images/profile/c-r-img1.png" alt=""/>
                                                        <div className="active-online"></div>
                                                </div>
                                                <div className="right">
                                                    <h4 className="title">
                                                        laura maria
                                                    </h4>
                                                    <p>
                                                        true love is...
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="single-c-r">
                                                <div className="left">
                                                    <img src="assets/images/profile/c-r-img2.png" alt=""/>
                                                        <div className="active-online"></div>
                                                </div>
                                                <div className="right">
                                                    <h4 className="title">
                                                        laura maria
                                                    </h4>
                                                    <p>
                                                        true love is...
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="single-c-r">
                                                <div className="left">
                                                    <img src="assets/images/profile/c-r-img3.png" alt=""/>
                                                        <div className="active-online"></div>
                                                </div>
                                                <div className="right">
                                                    <h4 className="title">
                                                        laura maria
                                                    </h4>
                                                    <p>
                                                        true love is...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="load-more">
                                            load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Profile_Single_Header