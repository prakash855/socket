import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";

import "./ProgressBar.css";

const ProgressBar = ({ range }) => (
  <div className="flex ranges">
    <input className="range-input" type="range" value={range} />
    {range < 34 ? (
      <small className="failure_percentage percentage">{range}%</small>
    ) : (
      <small className="percentage">{range}%</small>
    )}
  </div>
);

export default ProgressBar;
