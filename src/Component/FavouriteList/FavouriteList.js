import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../../Redux/Action/action";
// import planet from "../../Assets/planet1.svg";
import fav from "../../Assets/fav.svg";
import not_fav from "../../Assets/not_fav.svg";
import "./FavouriteList.scss";

import planet2 from "../../Assets/planet2.svg";
import planet3 from "../../Assets/planet3.svg";
import planet4 from "../../Assets/planet4.svg";
import planet5 from "../../Assets/planet5.svg";
import planet6 from "../../Assets/planet6.svg";
import planet7 from "../../Assets/planet7.svg";
// import planet8 from "../../Assets/planet1.svg";

const FavouriteList = ({ actions, data, loading, favourite }) => {
  const handleFav = (e) => {
    const id = e.target.getAttribute("data-id");
    actions.favourite_toggle(id);
  };

  const Planet = {
    0: planet4,
    1: planet2,
    2: planet3,
    3: planet4,
    4: planet5,
    5: planet6,
    6: planet7,
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="planetList">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            {data &&
              data.map((item, key) => [
                favourite.includes(item.id) && (
                  <div className="card" key={key}>
                    {" "}
                    <li>
                      <img
                        src={Planet[Math.floor(Math.random() * 7)]}
                        alt="neptune"
                      />
                    </li>
                    <li className="text">
                      <p>
                        Planet ID: <span>{item.id}</span>
                      </p>
                    </li>
                    <li className="text">
                      {" "}
                      <p>{item.name}</p>
                    </li>
                    {favourite.includes(item.id) ? (
                      <i data-id={item.id}>
                        <img
                          data-id={item.id}
                          onClick={handleFav}
                          src={fav}
                          alt="fav"
                        />
                      </i>
                    ) : (
                      <i data-id={item.id}>
                        <img
                          data-id={item.id}
                          onClick={handleFav}
                          src={not_fav}
                          alt="not_fav"
                        />
                      </i>
                    )}
                  </div>
                ),
              ])}
          </ul>
          ,
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  favourite: state.favourite,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList);
