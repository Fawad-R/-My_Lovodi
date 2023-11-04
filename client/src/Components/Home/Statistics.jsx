import React from 'react'

const Statistics = () => {
  return (
    <div>
        <section className="statistics-section">
        <div className="container">
            <div className="statistics-wrapper">
                <div className="row mb--20">
                    <div className="col-md-4 col-sm-6">
                        <div className="stat-item wow fadeInUp" data-wow-delay="0.1s">
                            <div className="icon">
                                <img src="assets/images/statistics/stat01.png" alt=""/>
                            </div>
                            <div className="stat-content">
                                <h3 className="counter-item"><span className=" odometer" data-odometer-final="350"></span>M</h3>
                                <span className="info">Tickets Booked</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="stat-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon">
                                <img src="assets/images/statistics/stat02.png" alt=""/>
                            </div>
                            <div className="stat-content">
                                <h3 className="counter-item"><span className=" odometer" data-odometer-final="447"></span>M</h3>
                                <span className="info">Usefull Sessions</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="stat-item wow fadeInUp" data-wow-delay="0.3s">
                            <div className="icon">
                                <img src="assets/images/statistics/stat03.png" alt=""/>
                            </div>
                            <div className="stat-content">
                                <h3 className="counter-item"><span className=" odometer" data-odometer-final="60"></span>M</h3>
                                <span className="info">Talented Speakers</span>
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

export default Statistics