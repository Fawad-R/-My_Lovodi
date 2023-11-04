import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card5 = () => {
    let navigate=useNavigate()
    return (
        <div>
            {/* width: "12rem", */}
            <div className="card" style={{display:'flex',textAlign:'left',cursor:'pointer',width: "21rem"}} onClick={()=>{navigate('/singleprofile')}} >
                {/* <div style={{margin:"auto",display:'flex'}}> */}
                {/* card-img-top */}
                {/* </div> */}
                    <div className="card-body" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <img src="img/fawad.png" style={{height:"56px",width:'55px',borderRadius:'200%',display:'inline'}} className="" alt="..."/>
                <div>
                        <p className="card-text">Muhammad J
                        <br />
                        29 yrs, 6' 1", <br /> Urdu, Ellicott City, USA
                        </p>
                        {/* <p className="card-text">29 yrs, 6' 1", <br /> Urdu, Ellicott City, USA</p> */}
                </div>
                        <a href="#" className="">Connect Now</a>
                    </div>
            </div>
        </div>
    )
}

export default Card5