import React, { useState } from 'react'
import '../../../Style/Dashboard_Home/Dashboard_MyPhotos.css'
const MyPhotos_Header = () => {

    return (
        <div className='MyPhotos_Header'>
            <div className="container">
                <div className="card">
                    <img src="img/fawad.png"/>
                        <div className="card__head">Dashy</div>
                </div>
                <div className="card">
                    <img src="img/fawad.png"/>
                        <div className="card__head">Cool</div>
                </div>
                <div className="card">
                <img src="img/fawad2.png"/>
                        <div className="card__head">Wonder</div>
                </div>
                <div className="card">
                <img src="img/fawad2.png"/>
                        <div className="card__head">Amaze</div>
                </div>
                <div className="card">
                <img src="img/fawad.png"/>
                        <div className="card__head">Keep it</div>
                </div>
            </div>
        </div>
    )
}

export default MyPhotos_Header