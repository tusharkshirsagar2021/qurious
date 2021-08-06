import "./EnrollActionComponent.css";

import React from "react";
import ReactDOM from "react-dom";

class EnrollActionComponent extends React.Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="wrapper">
            <div className="enroll_action">
            <div className="action_right">
                <button class="action_box_enroll_now">Enroll Now</button>
                </div>
                <div className="enroll_text">Call us today on 000 0000 0000 or enquire now for a free,</div>
                <div className="enroll_text">friendly career consultation with the experts.</div>
               
            </div>
            
        </div>
        <hr className="seperator"></hr>
        </div>
    );
  }
}
export default EnrollActionComponent;
