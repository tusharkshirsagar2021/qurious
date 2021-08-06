import "./ClientComponent.css";

import React from "react";
// import ReactDOM from "react-dom";

class ClientComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="custom_back_client">
          <div className="container-fluid">
            <div className="cat_row">
              <div className="category_div">
                <div className="client-card-item">
                  <div className="card-item-1"></div>
                </div>
                <div className="client-card-item">
                  <div className="card-item-2"></div>
                </div>
                <div className="client-card-item">
                  <div className="card-item-3"></div>
                </div>
                <div className="client-card-item">
                  <div className="card-item-4"></div>
                </div>
                <div className="client-card-item">
                  <div className="card-item-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClientComponent;
