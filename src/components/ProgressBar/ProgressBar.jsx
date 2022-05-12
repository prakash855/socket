import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";

import "./ProgressBar.css";

const ProgressBar = ({ range }) => (
  <div className="flex ranges">
    <input className="range-input" type="range" value={range} />
    {range < 34 ? (
      <p className="failure_percentage">{range}%</p>
    ) : (
      <p>{range}%</p>
    )}
  </div>
);

export default ProgressBar;
