import React from "react";

import "./Language.css";

const Language = ({ code, lang, level, range }) => {
  return (
    <div className="language flex">
      <div className="bold_text">{code}</div>
      <div className="langs">
        <h5 class="text_headings headFive">{lang}</h5>
        <div className="small_text">{level}</div>
      </div>
      <img src={range} alt="" />
    </div>
  );
};

export default Language;
