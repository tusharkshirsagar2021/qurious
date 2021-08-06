import "./FooterLinksComponent.css";

import React from "react";
// import ReactDOM from "react-dom";

class FooterLinksComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="footer_link_div">
          <div className="left_link">
            <p className="footer-heading">
              <b className="q">Q</b>urious
            </p>
            <div className="site_description">
              <p> Lorem Ipsum is simply dummy text of the </p>
              <p> printing and typesetting industry.Lorem Ipsum </p>
              <p> has been the industry’s standard dummy text</p>
            </div>
          </div>
          <div className="right_link_0">
            <h6>Courses</h6>
            <div className="list_content">
            <ul>
              <li>Classroom courses</li>
              <li>Virtual classroom courses</li>
              <li>E-Learning courses</li>
            </ul>
            </div>
          </div>
          <div className="right_link_1">
            <h6>Qurious</h6>
            <div className="list_content">
            <ul>
              <li>About us  </li>
              <li>Why Qurious?</li>
              <li>Testimonials</li>
            </ul>
            </div>
          </div>
          <div className="right_link_2">
            <h6>Help</h6>
            <div className="list_content">
            <ul>
              <li>Contact us </li>
              <li>Our venues</li>
              <li>My account</li>
            </ul>
            </div>
          </div>
        </div>
        <hr className="seperator"></hr>
        <div className="copyright">© 2021 Qurious. All rights reserved.</div>
        <div className="deep_footer_links">
             
            <ul>
                <li><a href="#home">Teams</a></li>
                <li><a href="#news">Privacy</a></li>
  
            </ul>

        </div>
      </div>
    );
  }
}
export default FooterLinksComponent;
