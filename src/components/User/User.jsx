import React from "react";
import Language from "../Language/Language";
import Task from "../Task/Task";

import Logout from "../../assets/Logout.png";
import UserPicture from "../../assets/User.png";
import EngLevel from "../../assets/EngLevel.png";
import SpanLevel from "../../assets/SpanLevel.png";
import test from "../../assets/test.png";
import Send from "../../assets/Send.png";
import "./User.css";

const User = () => {
  return (
    <div className="user flex">
      <div>
        <div className="logout_header flex">
          <h3 className="text_headings headThree">logout</h3>
          <img className="logout_logo" src={Logout} alt="" />
        </div>
        <div className="icons center_aligned">
          <img className="icon_lg round avatar_xl" src={UserPicture} alt="badge" />
          <span className="badge_status status_online">
            <div className="icon_add">+</div>
          </span>
        </div>
        <h3 className="bold_text center_aligned">Sadia Tasnim</h3>
        <div className="user_about center_aligned">Student</div>
      </div>
      <div className="layout_test">
        <Language
          code="B2"
          lang="English"
          level="High Intermediate"
          range={50}
        />
        <Language code="C1" lang="Spanish" level="Advanced" range={80} />
      </div>
      <div className="layout_test">
        <Task
          icon={test}
          name="Eng - vocabulary test"
          time="24 Sept 2019 Friday"
        />
        <Task
          icon={Send}
          name="Eng - Send grammar homework"
          time="26 Sept 2019 Wednesday"
        />
        <Task
          icon={Send}
          name="Spanish - Send essay"
          time="05 oct 2019 Monday"
        />
      </div>
    </div>
  );
};

export default User;
