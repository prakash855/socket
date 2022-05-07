import React, { useEffect } from "react";
import BorderBottom from "../BorderBottom";
import DataBar from "../DataBar/DataBar";
import Latestresults from "../LatestReults/Latestresults";
import Badges from "../Badges/Badges";
import { ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "./Profile.css";

import Search from "../../assets/Search.png";
import profile from "../../assets/profile.png";
import { BadgeInfo, latestReults } from "../../Data";

const Profile = () => {
  return (
    <div className="profile flex">
      <div className="heads flex right_aligned">
        <h5 className="text_headings headFive">22 Feb 2022</h5>
        <div className="searchBar flex">
          <img
            style={{ width: "1rem", height: "1rem" }}
            src={Search}
            alt="Search"
          />
        </div>
      </div>
      <div className="headPic flex">
        <div className="abt">
          <div className="headingMain bold_text">Welcome back Anna!</div>
          <h5 className="text_headings headFive">
            You’ve learned 80% of your goal this week!
          </h5>
          <h5 className="text_headings headFive">
            Keep it up and improve your results!
          </h5>
        </div>
        <img src={profile} alt="" className="headImg" />
      </div>
      <div className="results flex">
        <div className="latestReults">
          <ProfileHeader
            name="Latest results"
            action={[
              "More",
              <ArrowRightOutlined style={{ marginLeft: "1rem" }} />,
            ]}
          />

          {latestReults.map((props, id) => (
            <>
              <Latestresults key={id} {...props} />
              <BorderBottom />
            </>
          ))}
        </div>
        <div className="timeSpent">
          <ProfileHeader
            name="Time Spent on Learning"
            action={[
              "Last week",
              <DownOutlined style={{ marginLeft: "1rem" }} />,
            ]}
          />
          <DataBar />
        </div>
      </div>

      <div>
        <ProfileHeader
          name="Your Course"
          action={[
            "More",
            <ArrowRightOutlined style={{ marginLeft: "1rem" }} />,
          ]}
        />
        <div className="badges flex">
          {BadgeInfo.map((props, id) => (
            <Badges key={id} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
