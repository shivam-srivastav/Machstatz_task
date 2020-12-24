import React from "react";
import { connect } from "react-redux";
import icon from "../../Assets/planet.jpg";
import { bindActionCreators } from "redux";
import * as actions from "./../../Redux/Action/action";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const NavBar = ({ open, actions }) => {
  // const [open, setopen] = useState("all-planet");
  const toggle = (e) => {
    const data = e.target.getAttribute("data-open");
    actions.set_open(data);
  };
  return (
    <div className="navbar">
      <div className="navbar-icon">
        <img src={icon} alt="ico" />
        <h1>PLANETZ</h1>
      </div>
      <div className="navbar-list">
        <li data-open="all-planet" onClick={toggle}>
          <Link to="./">
            <p
              data-open="all-planet"
              onClick={toggle}
              style={{ color: open === "all-planet" ? `#ffd66b` : "grey" }}
            >
              All Planets
            </p>
          </Link>
        </li>
        <li style={{ color: `#ec524b` }}>|</li>
        <li
          data-open="favourite"
          onClick={toggle}
          // style={{ color: open === "favourite" ? `#ffd66b` : "grey" }}
        >
          <Link to="favourite">
            <p
              data-open="favourite"
              onClick={toggle}
              style={{ color: open === "favourite" ? `#ffd66b` : "grey" }}
            >
              Favourites
            </p>
          </Link>
        </li>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  open: state.open,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
