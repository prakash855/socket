import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import "./ProfileHeader.css";

const ProfileHeader = ({ name, action }) => {
  return (
    <div className="profileHeader flex">
      <h5 className="text_headings headFive">{name}</h5>
      <h5 className="text_headings headFive">{action}</h5>
    </div>
  );
};

export default ProfileHeader;
