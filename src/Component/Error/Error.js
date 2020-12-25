import React from "react";

const Error = ({ error_msg }) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        alignSelf: "center",
        color: "#ec524b",
        fontSize: "1.5rem",
      }}
    >
      <p>ERROR: {error_msg.message}</p>
    </div>
  );
};
export default Error;
