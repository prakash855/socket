import "./SideBar.css";
import Logo from "../../assets/Logo.png";
import OptionTabs from "./Tabs";

const SideBar = () => {
  return (
    <aside className="sidebar flex">
      <div className="menu_section">
      <div className="intro flex">
        <img className="logo" src={Logo} alt="logo" />
        <div className="content_subheading_heading">Stringle</div>
      </div>
      <div className="menuTabs">
        <OptionTabs />
      </div>
      </div>
      <div className="action-upgrade">
        <button className="btn primary_btn">Upgrade</button>
      </div>
    </aside>
  );
};

export default SideBar;
