import React from 'react'

const Card2 = () => {
    return (
        <div>
            <div className="card" style={{width: "12rem"}}>
                <div style={{margin:"auto"}}>
                <img src="img/fawad.png" style={{height:"100px",width:'100px',borderRadius:'200%'}} className="card-img-top" alt="..."/>
                </div>
                    <div className="card-body" style={{textAlign:'center'}}>
                        <h5 className="card-title">Muhammad J</h5>
                        <p className="card-text">29 yrs, 6' 1", <br /> Urdu, Ellicott City, USA</p>
                        <a href="#" className=" btn btn-primary">Connect Now</a>
                    </div>
            </div>
        </div>
    )
}

export default Card2