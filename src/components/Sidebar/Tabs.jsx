import React, { useState } from "react";
import "antd/dist/antd.css";
import { Tabs, Radio, Space } from "antd";
import {
  BookOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const OptionTabs = () => {
  const [tabPosition, setTabPosition] = useState("left");

  //   const changeTabPosition = (e) => {
  //     setTabPosition({ tabPosition: e.target.value });
  //   };

  return (
    <>
      <Tabs tabPosition={tabPosition}>
        <TabPane tab={[<HomeOutlined />, "Dashboard"]} key="1">
          {/* Content of Tab 1 lorem */}
        </TabPane>
        <TabPane tab={[<FolderOpenOutlined />, "Classes"]} key="2">
          {/* Content of Tab 2 */}
        </TabPane>
        <TabPane tab={[<BookOutlined />, "Resource"]} key="3">
          {/* Content of Tab 3 */}
        </TabPane>
        <TabPane tab={[<CalendarOutlined />, "Learning Plan"]} key="4">
          {/* Content of Tab 4 */}
        </TabPane>
        <TabPane tab={[
            <div className="icons flex">
              <MessageOutlined />
              <span class="badge badge_sm flex flex-center">4</span>
            </div>,
            "Chat",
          ]} key="5">
          {/* Content of Tab 5 */}
        </TabPane>
        <TabPane tab={[<SettingOutlined />, "Settings"]} key="6">
          {/* Content of Tab 6 */}
        </TabPane>
      </Tabs>
    </>
  );
};

export default OptionTabs;
