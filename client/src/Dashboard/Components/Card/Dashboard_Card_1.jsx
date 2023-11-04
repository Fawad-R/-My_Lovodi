import React from 'react'

const Dashboard_Card_1 = () => {
    return (
        <div>
            <div className="card" style={{ "width": "16rem" }}>
                <img src="img/fawad.png" style={{  margin: 'auto' }} className="card-img-top" alt="..." />
                <div className="card-body d-flex" style={{ justifyContent:'space-between',alignContent: "center",alignItems:"end" }} >
                    <div>
                        <p style={{margin:"0%",padding:"0%"}} className="card-title">
                            <b>Fawad Rehman</b> 
                            <br />
                            </p>
                        <p style={{margin:"0%",padding:"0%"}} className="">SH46046288</p>
                    </div>
                    <a href="#" className=" ">Edit</a>
                </div>
                <div className="card-body d-flex" style={{ justifyContent:'space-between',alignContent: "center",alignItems:"end" }} >
                    <div>
                        <p style={{margin:"0%",padding:"0%"}} className="card-title">Account Type</p>
                        <p style={{margin:"0%",padding:"0%"}} className="card-text"><b> Free Membership</b></p>
                    </div>
                    <a  href="#" className="">Upgrade</a>
                </div>
                <div className="card-body d-flex" style={{ justifyContent:'space-between',alignContent: "center",alignItems:"center" }} >
                    <div>
                        <p style={{margin:"0%",padding:"0%"}} className="card-title">Mobile no. is verified</p>
                        <p style={{margin:"0%",padding:"0%"}} className="card-text"> <b> Verify your ID</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard_Card_1