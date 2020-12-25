import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./../../Redux/Action/action";
import { bindActionCreators } from "redux";
import "./PlanetList.scss";

//Componets
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

//Assets
import planet from "../../Assets/planet1.svg";
import fav from "../../Assets/fav.svg";
import not_fav from "../../Assets/not_fav.svg";

const PlanetList = ({
  actions,
  data,
  loading,
  favourite,
  error,
  error_msg,
}) => {
  const handleFav = (e) => {
    const id = e.target.getAttribute("data-id");
    actions.favourite_toggle(id);
  };

  useEffect(() => {
    actions.fetch_data_from_api();
  }, [actions]);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
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
            {!error ? (
              data &&
              data.map((item, key) => [
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
                </div>,
              ])
            ) : (
              <Error error_msg={error_msg} />
            )}
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
  error: state.fetch_error,
  error_msg: state.fetch_error_msg,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetList);
