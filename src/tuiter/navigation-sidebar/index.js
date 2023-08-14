import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function NavigationSidebar() {
      const { pathname } = useLocation();
      const [ignore, active] = pathname.split("/");
      const { currentUser } = useSelector((state) => state.user);
      const isLinkActive = (linkPath) => {
            return pathname.startsWith(linkPath);
      };

      return (
            <div className="list-group">
                  <Link className={`list-group-item ${isLinkActive("/tuiter/home") ? "active" : ""}`}
                        to="/tuiter/home"> Home </Link>
                  {/* <Link className={`list-group-item ${isLinkActive("/tuiter/explore") ? "active" : ""}`}
            to="/tuiter/explore"> Explore </Link> */}
                  <Link className={`list-group-item ${isLinkActive("/tuiter/notifications") ? "active" : ""}`}
                        to="/tuiter/notifications"> Notifications </Link>
                  {!currentUser && <Link className={`list-group-item ${isLinkActive("/tuiter/login") ? "active" : ""}`}
                        to="/tuiter/login"> Login </Link>}
                  {!currentUser && <Link className={`list-group-item ${isLinkActive("/tuiter/register") ? "active" : ""}`}
                        to="/tuiter/register"> Register </Link>}
                  {currentUser && <Link className={`list-group-item ${isLinkActive("/tuiter/profile") ? "active" : ""}`}
                        to="/tuiter/profile"> Profile </Link>}
            </div>
      );
};

export default NavigationSidebar;