import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import "./Badges.css";

const Badge = ({ code, name, course, background, codeBackground }) => {
  return (
    <div style={{ background }} className="badge_down flex">
      <div style={{ background: codeBackground }} className="flex code_badge">
        {code}
      </div>
      <div className="content_badge">
        <small>{name}</small>
        <div class="bold_text">{course}</div>
      </div>
      <div className="action_badge">
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Badge;
