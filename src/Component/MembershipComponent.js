import "./MembershipComponent.css";

import React from "react";
// import ReactDOM from "react-dom";

class MembershipComponent extends React.Component {
  render() {
    return (
      
          <div className="wrapper">
            <div className="how-to-reachus">
              <p id="reachus-heading">How can you reach to us?</p>
              <p id="reachus-subheading">
                Education began in prehistory, as adults trained the young in the
                knowledge and skills.
              </p>
              <div className="reach_us">
                <div className="card" id="card_one">
                  <div className="card-body">
                    <p className="card-title" id="card-title-one">
                      1
                    </p>
                    <div className="card-subtitle">
                        <p className="card-subtitle-text">Select your</p>{" "}
                        <p className="card-subtitle-text"> Membership</p>
                    </div>
                    <p className="card-description">
                      Lorem ipsem is dummy text used for printing and other
                    </p>
                  </div>
                </div>
                <div className="card" id="card_two">
                  <div className="card-body">
                    <p className="card-title" id="card-title-two">
                      2
                    </p>
                    <div className="card-subtitle">
                    <p className="card-subtitle-text">Tell us about </p>
                    <p className="card-subtitle-text">Yourself</p>
                    </div>
                    <p className="card-description">
                      Lorem ipsem is dummy text used for printing and other
                      placeholders
                    </p>
                  </div>
                </div>
                <div className="card" id="card_three">
                  <div className="card-body">
                    <p className="card-title" id="card-title-three">
                      3
                    </p>
                    <div className="card-subtitle">
                    <p className="card-subtitle-text">Start</p>
                    <p className="card-subtitle-text">Learning</p>
                    </div>
                    <p className="card-description">
                      Lorem ipsem is dummy text used for printing and other
                      placeholders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
    );
  }
}

export default MembershipComponent;
