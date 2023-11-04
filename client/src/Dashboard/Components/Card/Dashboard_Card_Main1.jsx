import React from 'react'
import '../../../Style/Dashboard_Home/Dashboard_Card_Main1.css'
const Dashboard_Card_Main1 = () => {
    return (
        <div className=''>
            Your Activity Summary
        <div className='Dashboard_Card_Main1'>
            <div className="card" style={{"width": "11rem",marginBottom:'5px',padding:'1%'}}>
                    <div className="card-body">
                        <h5 className="card-title">0</h5>
                        <p className="card-text">No Pending Invitations</p>
                    </div>
            </div>
            <div className="card" style={{"width": "11rem",marginBottom:'5px',padding:'1%'}}>
                    <div className="card-body">
                        <h5 className="card-title">2</h5>
                        <p className="card-text">Accepted Invitations</p>
                    </div>
            </div>
            <div className="card" style={{"width": "11rem",marginBottom:'5px',padding:'1%'}}>
                    <div className="card-body">
                        <h5 className="card-title">0</h5>
                        <p className="card-text">No Pending Invitations</p>
                    </div>
            </div>
            <div className="card" style={{"width": "11rem",marginBottom:'5px',padding:'1%'}}>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"> <i> Only Premium Members can avail these benefits</i></p>
                    </div>
            </div>
            
            <div className="card" style={{"width": "11rem",marginBottom:'5px',padding:'1%',opacity:"30%"}}>
                    <div className="card-body">
                        <h5 className="card-title">0</h5>
                        <p className="card-text">Contacts Viewed</p>
                    </div>
            </div>
            <div className="card" style={{"width": "11rem",marginBottom:'5px',padding:'1%',opacity:"30%"}}>
                    <div className="card-body">
                        <h5 className="card-title">0</h5>
                        <p className="card-text">Chats Initiated</p>
                    </div>
            </div>
            
        </div>
        </div>
    )
}

export default Dashboard_Card_Main1