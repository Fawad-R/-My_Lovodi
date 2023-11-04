import React from 'react'

const Dashboard_Card_Main2 = () => {
  return (
    <div>
      <div className="card mb-3" style={{ width:'100%' }}>
        <div className="row g-0">
          <div className="col-md-2">
            <img style={{height:'120px',margin:'auto',textAlign:'center'}} src="img/pngtree2.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Your Profile is how your Matches
                see you. Thanks for improving it</h5>
              <p className="card-text">Go ahead, check out your Matches.</p>
              <p className="card-text"><small className="text-body-secondary">View Today's Matches</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_Card_Main2