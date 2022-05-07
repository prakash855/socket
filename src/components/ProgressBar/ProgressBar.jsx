import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";

import "./ProgressBar.css";

const ProgressBar = ({ range }) => (
  <Progress className="progressBar" percent={range} size="small" />
);

export default ProgressBar;
