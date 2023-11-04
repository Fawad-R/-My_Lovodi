import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../../Style/Testimonial/Testimonial_Header.css';

const Testimonial_Header = () => {
  return (
    <div className="Testimonial_Header">
      <div className="gtco-testimonials">
        <h2>Testimonials</h2>
        <Carousel autoPlay>
          <div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                alt=""
              />
              <div className="card-body">
                <h5>
                  Ronne Galle <br />
                  <span> Project Manager </span>
                </h5>
                <p className="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat ”
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"
                alt=""
              />
              <div className="card-body">
                <h5>
                  Missy Limana<br />
                  <span> Engineer </span>
                </h5>
                <p className="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat ”
                </p>
              </div>
            </div>
          </div>
          {/* Add more carousel items here */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial_Header;
