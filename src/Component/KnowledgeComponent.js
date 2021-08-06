import "./KnowledgeComponent.css";
import React from "react";
// import ReactDOM from "react-dom";

class KnowledgeComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container1 container">
          <div className="box"></div>
          <div className="box overlay">
            <button className="knowledge_button">
              #No 1 Platform for Learning
            </button>
            <p>
              <span className="knowledge_box_heading">Take the step</span>{" "}
              <p className="knowledge_box_heading">to knowledge</p>
            </p>
            <p className="knowledge_box_subheading">
              Upskill and reskill your people with AI-assisted learning Ready to
              get started?
            </p>
            <button className="knowledge_box_enrollnow">Enroll Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default KnowledgeComponent;
