import React from "react";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import {Route, Routes} from "react-router";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import NotificationScreen from "./notification-screen";
import MessageScreen from "./message-screen";
import MoreScreen from "./more-screen";
import ListScreen from "./list-screen";
import WhoToFollowList from "./who-to-follow-list";


function Tuiter() {
  return(
      <div>
        <Nav/>
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/home" element={<HomeScreen/>} />
              <Route path="/explore" element={<ExploreScreen/>} />
              <Route path="/notifications" element={<NotificationScreen/>} />
              <Route path="/messages" element={<MessageScreen/>} />
              <Route path="/bookmarks" element={<BookmarksScreen/>}/>
              <Route path="/lists" element={<ListScreen/>} />
              <Route path="/profile" element={<ProfileScreen/>}/>
              <Route path="/more" element={<MoreScreen/>} />
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollowList/>
          </div>
        </div>

      </div>
  );
};
export default Tuiter;