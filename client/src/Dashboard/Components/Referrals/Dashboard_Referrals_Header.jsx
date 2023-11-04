import React, { useState } from 'react';
import '../../../Style/Dashboard_Home/Dashboard_Referrals_Header.css';

const Dashboard_Referrals_Header = () => {
  const [formData, setFormData] = useState({
    referredName: '',
    email: '',
    facebookLink: '',
    whatsappNumber: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to the server.
    // Implement the logic to send this data to the admin or perform any other necessary actions.
  };

  return (
    // <div className="Dashboard_Referrals_Header">
    // <div className="referral-form-container">
    //   <h2>Referrals Form</h2>
    //   <form onSubmit={handleSubmit}>
    // <label htmlFor="referredName">Name of Referred Person:</label>
    // <input
    //   type="text"
    //   name="referredName"
    //   id="referredName"
    //   value={formData.referredName}
    //   onChange={handleInputChange}
    //   required
    // />

    //     <label htmlFor="email">Email Address:</label>
    //     <inpu/t
    //       type="email"
    //       name="email"
    //       id="email"
    //       value={formData.email}
    //       onChange={handleInputChange}
    //       required
    //     />

    //     <label htmlFor="facebookLink">Facebook Link:</label>
    //     <inpu/t
    //       type="text"
    //       name="facebookLink"
    //       id="facebookLink"
    //       value={formData.facebookLink}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="whatsappNumber">WhatsApp Number:</label>
    //     <inpu/t
    //       type="tel"
    //       name="whatsappNumber"
    //       id="whatsappNumber"
    //       value={formData.whatsappNumber}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="message">Message:</label>
    //     <textarea
    //       name="message"
    //       id="message"
    //       value={formData.message}
    //       onChange={handleInputChange}
    //     />

    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    // </div>
    <div className="Dashboard_Referrals_Header">
      <div className="content">

        <div className="container">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <h3 className="mb-3">Let's Reffer your friends</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi, ipsa hic alias officia facilis eveniet, neque laborum cumque maxime soluta. Neque atque necessitatibus ipsam sequi soluta magni, iste vero fuga inventore, explicabo totam quis quia nemo possimus cupiditate doloribus?</p>
              <p>Quasi optio numquam pariatur amet laudantium, dicta ullam obcaecati nihil eveniet et aperiam beatae illum vitae in asperiores, a ex. Voluptates accusantium, beatae dolorem natus delectus nostrum, iusto nemo optio quas eum, quis a in reprehenderit totam, sequi distinctio impedit.</p>
              <p>Dolor aliquid, commodi vitae dolorum veniam amet error! Nemo nam quibusdam delectus dolore eveniet officia harum eum sit magnam possimus. Eum optio dolores repellat ea impedit, in unde, rem ipsam rerum autem iusto vero facilis blanditiis explicabo sapiente consequatur provident? <a href="#">info@mywebsite.com</a></p>

            </div>

            <div className="col-md-6">
              <div className="box">
                {/* <h3 className="heading">How Can We Help?</h3> */}
                <form className="mb-5" method="post" id="contactForm" name="contactForm">
                  <div className="row">

                    <div className="col-md-6 form-group">
                      {/* <label for="name" className="col-form-label">Name *</label>
                      <input type="text" className="form-control" name="name" id="name" placeholder="Your name"/> */}
                      <label className="col-form-label" htmlFor="referredName">Name of Referred Person:</label>
                      <input
                        type="text"
                        name="referredName"
                        id="referredName"
                        placeholder='name'
                        className="form-control"
                        value={formData.referredName}
                        onChange={handleInputChange}
                        required
                      />

                    </div>
                    <div className="col-md-6 form-group">
                      <label for="WhatsApp" className="col-form-label">WhatsApp Number</label>
                      <input type="tel" className="form-control" name="organization" id="organization" placeholder="whatsapp of referrel" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label for="email" className="col-form-label">Email *</label>
                      <input type="text" className="form-control" name="email" id="email" placeholder="Your email address" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label for="message" className="col-form-label">Message*</label>
                      <textarea className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    {/* <div className="col-md-6 form-group">
                      <label for="budget" className="col-form-label">Budget</label>
                      <select className="custom-select" id="budget" name="budget">
                        <option selected>Choose...</option>
                        <option value="$1000 below"> $1,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                        <option value="$25,000 >">$25,000 </option>
                      </select>
                    </div> */}
                    {/* <div className="col-md-6 form-group">
                      <label for="message" className="col-form-label">Target Lunch</label>
                      <input type="text" className="form-control" name="date" id="date" placeholder="Example: January 15th" />
                    </div> */}
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <input type="submit" value="Send Message" className="custom-button btn btn-block btn-primary rounded-0 py-2 px-4" />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>

                <div id="form-message-warning mt-4"></div>
                <div id="form-message-success">
                  Your message was sent, thank you!
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard_Referrals_Header