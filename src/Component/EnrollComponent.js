import "./EnrollComponent.css";
import React from "react";
// import ReactDOM from "react-dom";

class EnrollComponent extends React.Component {
  render() {
    return (
      <div className="div_light_grey">
        <div className="container-fluid">
          <div className="wrapper">
            <div className="enroll_div">
              <div className="left_enroll"></div>
              <div className="center_enroll">
                <div className="enroll-now-header"> Take the first step </div>
                <div className="enroll-now-header">to knowledge </div>
                <p className="enroll-now-sub">
                  Upskill and reskill your people with AI-assisted learning
                </p>
                <p className="enroll-now-sub"> Ready to get started?</p>
                <div className="enroll_btn_container">
                  <button className="btn_enroll_now_dark"> Enroll Now</button>
                </div>
              </div>
              <div className="right_enroll"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EnrollComponent;
