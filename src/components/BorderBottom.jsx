import React from "react";

const BorderBottom = ({ id }) => {
  return <>{id !== 4 && <div style={{ borderBottom: "1px solid" }}></div>}</>;
};

export default BorderBottom;
