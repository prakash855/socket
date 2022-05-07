import React from "react";
import Language from "../Language/Language";
import Task from "../Task/Task";

// Vendors
import Logout from "../../assets/Logout.png";
import UserPicture from "../../assets/User.png";
import test from "../../assets/test.png";
import Send from "../../assets/Send.png";

import "./User.css";
import { languages, tasks } from "../../Data";

const User = () => {
  return (
    <div className="user flex">
      <div>
        <div className="logout_header flex">
          <h3 className="text_headings headThree">logout</h3>
          <img className="logout_logo" src={Logout} alt="" />
        </div>
        <div className="icons center_aligned">
          <img
            className="icon_lg round avatar_xl"
            src={UserPicture}
            alt="badge"
          />
          <span className="badge_status status_online">
            <div className="icon_add">+</div>
          </span>
        </div>
        <h3 className="bold_text center_aligned">Sadia Tasnim</h3>
        <div className="user_about center_aligned">Student</div>
      </div>
      <div className="layout_test">
        {languages.map((props, id) => (
          <Language key={id} {...props} />
        ))}
      </div>
      <div className="layout_test">
        {tasks.map((props, id) => (
          <Task key={id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default User;
