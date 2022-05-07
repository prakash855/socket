import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

import "./Latestresults.css";

const Latestresults = ({ unit, name, range }) => {
  return (
    <div className="resultsLatest flex">
      <div className="flex">
        <small>
          <div className="bold_text">Unit {unit}-</div>
        </small>
        <small className="normal_txt text_headings headFive">{name}</small>
      </div>
      <ProgressBar range={range} />
    </div>
  );
};

export default Latestresults;
