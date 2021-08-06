import searchimage from '../img/search.jpg'
import logoimage from '../img/logo.jpg'
function Header() {
  return (
      <div>
      <div className="header">
        <div className="logo">
          <a href="#">
            <img src={logoimage} />
          </a>
        </div>
        <div className="menu_style">
          <ul>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Bootcamp</a>
            </li>
            <li>
              <a href="#">Tutors</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="signup_box">
          <span>Log in</span>
          <button className="btn">Sign Up</button>
          <button className="search_btn">
            <img src={searchimage} />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="container_falout">
          <div>
            <button id="button1">#1 Platform for Learning</button>
            <p className="first_heading">Take the first step to knowledge</p>
            <p className="second_heading">
              Upskill and reskill your people with AI-assisted learning Ready to
              get started?
            </p>
            <button id="button2">Get Started</button>
          </div>
          <div className="hero_img"></div>
        </div>
      </div>
      </div>
  );
}

export default Header;
