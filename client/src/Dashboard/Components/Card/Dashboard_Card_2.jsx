import React from 'react'

const Dashboard_Card_2 = () => {
    return (
        <div>
            Notifications
            <div className="card" style={{"width": "11rem"}}>
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        {/* <h5 className="card-title">Card title</h5> */}
                        <p  style={{margin:"0%",padding:"0%"}} className=""> <b>SH10770177</b>  added a Photo to her profile</p>
                        <p  style={{margin:"0%",padding:"0%"}} className="card-text-sm"> <i> a few hours ago </i></p>
                    </div>
            </div>
        </div>
    )
}

export default Dashboard_Card_2