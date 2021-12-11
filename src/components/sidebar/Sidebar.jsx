import React from "react";
import "./sidebar.css";
import {
  Home,
  // Timeline,
  Insights,
  FormatListBulleted,
  Create,
  AutoFixHigh,
  BarChart,
  Forum,
  MailOutline,
  DynamicFeed,
  // WorkOutline,
  // Report,
  CalendarToday,
  Person,
  PersonAddAlt1Rounded,
  PersonRemoveAlt1,
  Calculate,
} from "@mui/icons-material";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link"> */}
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Home
            </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              <Insights className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Posts</h3>
          <ul className="sidebarList">
            {/* <Link to="/users" className="link"> */}
            <li className="sidebarListItem">
              <FormatListBulleted className="sidebarIcon" />
              Posts List
            </li>
            {/* </Link> */}
            {/* <Link to="/products" className="link"> */}
            <li className="sidebarListItem">
              <Create className="sidebarIcon" />
              Create Post
            </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              <AutoFixHigh className="sidebarIcon" />
              Edit Post
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Users List
            </li>
            <li className="sidebarListItem">
              <PersonAddAlt1Rounded className="sidebarIcon" />
              Add User
            </li>
            <li className="sidebarListItem">
              <PersonRemoveAlt1 className="sidebarIcon" />
              Edit User
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">APPs</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Forum className="sidebarIcon" />
              Chat
            </li>
            <li className="sidebarListItem">
              <CalendarToday className="sidebarIcon" />
              Calendar
            </li>
            <li className="sidebarListItem">
              <Calculate className="sidebarIcon" />
              Calculator
            </li>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Setting</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
