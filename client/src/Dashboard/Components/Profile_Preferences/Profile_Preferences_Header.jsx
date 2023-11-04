import React from 'react'
import '../../../Style/Dashboard_Home/Profile_Preferences_Header.css'
const Profile_Preferences_Header = () => {
  return (
    <div className='Profile_Preferences_Header'>
      <section className="page-section-ptb text-white" style={{ background: "url(asset3/images/pattern/04.png) no-repeat 0 0", backgroundSize: "cover" }}>
      {/* <section className="page-section-ptb text-white" style={{ background: "url(images/pattern/04.png) no-repeat 0 0", backgroundSize: "cover" }}> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="step-form">
                <div className="stepwizard">
                  <div className="stepwizard-row setup-panel">
                    <div className="stepwizard-step"> <a href="#step-1" className="btn btn-circle">1 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                      <p>Photo</p>
                    </div>
                    <div className="stepwizard-step"> <a href="#step-2" className="btn btn-circle" disabled="disabled">2 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                      <p>about you</p>
                    </div>
                    <div className="stepwizard-step"> <a href="#step-3" className="btn btn-circle" disabled="disabled">3 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                      <p>preferences</p>
                    </div>
                  </div>
                </div>
                <form method="post" className="text-center mt-3">
                  <div className="row  justify-content-center setup-content" id="step-1">
                    <div className="col-md-10">
                      <h4 className="title divider-3 mb-5">Photo</h4>
                      <div className="row  justify-content-center">
                        <div className="col-md-8">
                          <div className="form-group mb-3">
                            <div className="row">
                              <div className="col-md-8"> <img className="img-center w-100" src="asset3/images/step/01.png" alt="" /> </div>
                              <div className="col-md-4">
                                <div className="row">
                                  <div className="col-md-12 mb-3 sm-mb-2"> <img className="img-center" src="asset3/images/step/02.png" alt="" /> </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12 mt-2"> <img className="img-center" src="asset3/images/step/03.png" alt="" /> </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-4">
                              <div className="col-md-4"> <img className="img-center" src="asset3/images/step/04.png" alt="" /> </div>
                              <div className="col-md-4"> <img className="img-center" src="asset3/images/step/05.png" alt="" /> </div>
                              <div className="col-md-4"> <img className="img-center" src="asset3/images/step/06.png" alt="" /> </div>
                            </div>
                          </div>
                          <div className="form-group mb-3">
                            <div className="step-social mt-3 mb-2 text-center clearfix">
                              <ul className="list-inline text-capitalize">
                                <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i>import</a></li>
                                <li><a href="#"><i className="fa fa-file-image-o" aria-hidden="true"></i> import</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="profile-info text-start">
                          <p className="mb-0"><i className="fa fa-info-circle" aria-hidden="true"></i> profile with photos get 10 times as many responses</p>
                        </div>
                      </div>
                      <div className="form-group mb-0"> <a className="button btn-theme full-rounded btn nextBtn btn-lg mt-2 animated right-icn"><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>
                    </div>
                  </div>
                  <div className="row setup-content" id="step-2">
                    <div className="col-md-12">
                      <div className="row  justify-content-center">
                        <div className="col-md-8 text-start text-capitalize text-white">
                          <div className="form-group mb-0">
                            <label className="title divider-3 mb-3">gender</label>
                            <div className="row mb-3">
                              <div className="col-md-4 mt-sm-2">
                                <div className="radio">
                                  <input name="group2" checked="checked" id="radio1" type="radio" />
                                  <label for="radio1">female</label>
                                </div>
                              </div>
                              <div className="col-md-4 mt-sm-2">
                                <div className="radio">
                                  <input name="group2" id="radio2" type="radio" />
                                  <label for="radio2">male</label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label className="title divider-3 mb-3">about me</label>
                              <textarea className="form-control" rows="3"></textarea>
                            </div>
                            <div className="form-group mb-3">
                              <label className="title divider-3 mb-3">location access</label>
                              <div className="checkbox">
                                <input name="group2" id="check1" type="checkbox" />
                                <label for="check1">allow to access your location</label>
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <div className="profile-info">
                                <p className="mb-0"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                              </div>
                            </div>
                            <div className="form-group text-center mb-0"> <a className="button btn-theme full-rounded btn nextBtn btn-lg mt-2 animated right-icn"><span>register<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row setup-content" id="step-3">
                    <div className="col-md-12">
                      <div className="row  justify-content-center">
                        <div className="col-md-8 text-start text-capitalize text-white">
                          <div className="form-group mb-0">
                            <label className="title divider-3 mb-3">intrested in</label>
                            <div className="row mb-3">
                              <div className="col-md-4 mt-sm-2">
                                <div className="radio">
                                  <input name="group3" checked="checked" id="radio3" type="radio" />
                                  <label for="radio3">female</label>
                                </div>
                              </div>
                              <div className="col-md-4 mt-sm-2">
                                <div className="radio">
                                  <input name="group3" id="radio4" type="radio" />
                                  <label for="radio4">male</label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label className="title divider-3 mb-6">age preference</label>
                              <div>
                                <input id="slider1" className="range-slider" data-slider-id="ex1Slider1" type="text" data-slider-min="0" data-slider-max="30" data-slider-step="1" data-slider-value="18" />
                                <input id="slider2" className="range-slider" data-slider-id="ex1Slider2" type="text" data-slider-min="30" data-slider-max="100" data-slider-step="1" data-slider-value="30" />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label className="title divider-3 mb-6">distance preference (miles)</label>
                              <div>
                                <input id="slider3" className="range-slider" data-slider-id="ex1Slider1" type="text" data-slider-min="0" data-slider-max="35" data-slider-step="1" data-slider-value="30" />
                                <input id="slider4" className="range-slider" data-slider-id="ex1Slider2" type="text" data-slider-min="36" data-slider-max="200" data-slider-step="1" data-slider-value="160" />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label className="title divider-3 mb-3">location access</label>
                              <div className="checkbox">
                                <input name="check2" id="check2" type="checkbox" />
                                <label for="check2">allow to access your location</label>
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <div className="profile-info">
                                <p className="mb-0"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                              </div>
                            </div>
                            <div className="form-group mb-0 text-center"> <a className="button btn-theme full-rounded btn btn-lg mt-2 animated right-icn"><span>submit<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Profile_Preferences_Header