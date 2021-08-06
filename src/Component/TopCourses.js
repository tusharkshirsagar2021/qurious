import "./TopCourses.css";
// Import Swiper React components
import React from "react";
// import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// const options = {
//   items: 4,
// };
class TopCourses extends React.Component {
  render() {
    return (
      <div className="custom_back">
        <div className="container-fluid">
          <div className="container-fluid-inside">
          <div className="wrapper">
          <div className="training_div_main">
            <div className="training_div">
              <div>
                {" "}
                <h1 className="top_selling"> Top Selling Courses</h1>
              </div>
              <div> </div>
              <div>
                {" "}
                <button class="btn_view_all">View All</button>
              </div>
            </div>

            <OwlCarousel items={4} className="owl-theme" loop margin={10} nav>
              <div class="item">
                <img
                  className="img"
                  src={"https://via.placeholder.com/256X185"}
                alt=""/>
                <div>
                  <p className="cart-subheading">
                    Tim Cramp on Acing Your Online Communication
                  </p>

                  <div className="course_div">
                    <div className="cost_and_time">
                      <i className="fa fa-clock-o"></i> 39 Mins{" "}
                    </div>
                    <div> </div>
                    <div className="cost_and_time">
                      <i className="fa fa-gbp"></i> 400.00{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <img
                  className="img"
                  src={"https://via.placeholder.com/256X185"}
                  alt="" />
                <div>
                  <p className="cart-subheading">
                    Swift programming For beginners &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </p>
                  <div className="course_div">
                    <div className="cost_and_time">
                      <i className="fa fa-clock-o"></i> 39 Mins{" "}
                    </div>
                    <div> </div>
                    <div className="cost_and_time">
                      <i className="fa fa-gbp"></i> 400.00{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img
                  className="img"
                  src={"https://via.placeholder.com/256X185"}
                  alt=""/>
                <div>
                  <p className="cart-subheading">
                    Agile time Management for Product managers
                  </p>
                  <div className="course_div">
                    <div className="cost_and_time">
                      <i className="fa fa-clock-o"></i> 39 Mins{" "}
                    </div>
                    <div> </div>
                    <div className="cost_and_time">
                      <i className="fa fa-gbp"></i> 400.00{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img
                  className="img"
                  src={"https://via.placeholder.com/256X185"}
                  alt=""/>
                <div>
                  <p className="cart-subheading">
                    How to Design a Logo – a Beginners Course
                  </p>
                  <div className="course_div">
                    <div className="cost_and_time">
                      <i className="fa fa-clock-o"></i> 39 Mins{" "}
                    </div>
                    <div> </div>
                    <div className="cost_and_time">
                      <i className="fa fa-gbp"></i> 400.00{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img
                  className="img"
                  src={"https://via.placeholder.com/256X185"}
                  alt="" />
                <div>
                  <p className="cart-subheading">
                    Tim Cramp on Acing Your Online Communication
                  </p>
                  <div className="course_div">
                    <div className="cost_and_time">
                      <i className="fa fa-gbp"></i> 39 Mins{" "}
                    </div>
                    <div> </div>
                    <div className="cost_and_time">
                      <i className="fa fa-clock-o"></i> 400.00{" "}
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopCourses;
