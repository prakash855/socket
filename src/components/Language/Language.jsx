import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

import "./Language.css";

const Language = ({ code, lang, level, range }) => {
  return (
    <div className="language flex">
      <div className="flex lang_section">
        <div className="bold_text">{code}</div>
        <div className="langs">
          <h5 className="text_headings headFive">{lang}</h5>
          <div className="small_text">{level}</div>
        </div>
      </div>
      <ProgressBar range={range} />
    </div>
  );
};

export default Language;
