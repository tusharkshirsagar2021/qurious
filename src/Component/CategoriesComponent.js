import "./CategoriesComponent.css";

import React from "react";
// import ReactDOM from "react-dom";

class CategoriesComponent extends React.Component {
  render() {
    return (
      <div className="custom_back_cate">
        <div className="container-fluid">
          <div className="wrapper">
          <div className="top_categories_main">
            <p className="top_categories">Browse all</p>
            <div className="top_categories">
              Courses categorywise
              <div>
                {" "}
                <button className="btn_enroll_now"> Enroll Now </button>{" "}
              </div>
            </div>
            <p>&nbsp;</p>
            <p>Education began in prehistory, as adults trained the </p>
            <p>young in the knowledge and skills.</p>
            <div className="cat_row">
              <div className="category_div">
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                 alt=""   />
                  </div>
                  <p className="card-item-footer">Design</p>
                </div>
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                    alt=""/>
                  </div>
                  <p className="card-item-footer">Development</p>
                </div>
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                      alt=""/>
                  </div>
                  <p className="card-item-footer">Marketing</p>
                </div>
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                      alt="" />
                  </div>
                  <p className="card-item-footer">Product</p>
                </div>
              </div>
            </div>
            <div className="cat_row">
              <div className="category_div">
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                      alt=""/>
                  </div>
                  <p className="card-item-footer">Photograhy</p>
                </div>
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                      alt=""/>
                  </div>
                  <p className="card-item-footer">Personal Develop</p>
                </div>
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                      alt="" />
                  </div>
                  <p className="card-item-footer">Music</p>
                </div>
                <div className="card-item">
                  <div className="card-item-header">
                    <img
                      className="img"
                      src={"https://via.placeholder.com/256X323"}
                      alt="" />
                  </div>
                  <p className="card-item-footer">Business</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesComponent;
