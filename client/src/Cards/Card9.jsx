import React from 'react'

const Card9 = () => {
    return (
        <div>
            <div  style={{ width: "17rem" }} className="card Card1">
                {/* <div className="card" style={{ width: "12rem" }}> */}
                <div style={{ margin: "auto" }}>
                    <img src="img/fawad.png" style={{ height: "190px", width: '240px' }} className="card-img-top" alt="..." />
                </div>
                <div className="card-body" style={{ textAlign: 'left' }}>
                    <h5 className="card-title">Muhammad J</h5>
                    <p className="card-text">29 yrs, 6' 1", <br /> Urdu, Ellicott City, USA</p>
                    <a href="#" className="custom-button">Connect Now</a>
                </div>
            </div>
        </div>
    )
}

export default Card9