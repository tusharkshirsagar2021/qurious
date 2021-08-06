import "./CardComponent.css";
function TrainingCards() {
  return (
    <div>
      <div className="cart-group">
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="logo">
                <i className="fa fa-graduation-cap logo_1"></i>
              </div>

              <p className="cart-heading">SHORT & ACCREDITED COURSES</p>
              <p className="cart-subheading">
                Ranging from 1 -14 Days or up to 12 Months
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="logo">
                <i className="fa fa-graduation-cap  logo_2"></i>
              </div>
              <p className="cart-heading">CLASSROOM</p>
              <p className="cart-subheading">
                Nationwide Locations running monthly whether Face2face or
                Virtual Live Classroom
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="logo">
                <i className="fa fa-graduation-cap  logo_3 "></i>
              </div>
              <p className="cart-heading">COMPANY COURSES</p>
              <p className="cart-subheading">
                Design and Tailor courses for your team and deliver at a
                location of choice.
              </p>
            </div>
          </div>

          <div className="column col-md-">
            <div className="card">
              <div className="logo">
                <i className="fa fa-caret-square-o-right logo_4 "></i>
              </div>
              <p className="cart-heading">ONLINE VIDEO COURSES</p>
              <p className="cart-subheading">
                Self-paced, Study from anywhere E-learning Video courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingCards;
