import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../../Redux/Action/action";

import planet from "../../Assets/planet1.svg";
import fav from "../../Assets/fav.svg";
import not_fav from "../../Assets/not_fav.svg";
import "./FavouriteList.scss";

const FavouriteList = ({ actions, data, loading, favourite }) => {
  const handleFav = (e) => {
    const id = e.target.getAttribute("data-id");
    actions.favourite_toggle(id);
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
                      <img src={planet} alt="neptune" />
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
