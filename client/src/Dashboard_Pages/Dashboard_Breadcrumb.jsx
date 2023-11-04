import React from 'react'

const Dashboard_Breadcrumb = () => {
    return (
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    {/* <Dashboard_Nav /> */}
                    <div className="content">
                        <h2 className="title extra-padding">
                            Dashboard
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>

                            <li>
                                Dashboard
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard_Breadcrumb