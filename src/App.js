import Profile from "./components/Profile/Profile";
import SideBar from "./components/Sidebar/SideBar";
import User from "./components/User/User";
import "./styles.css";

export default function App() {
  return (
    <div className="App flex">
      <SideBar />
      <Profile />
      <User />
    </div>
  );
}
