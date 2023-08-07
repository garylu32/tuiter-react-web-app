import React from "react";
import TuitHomeList from "./tuits";
import WhatsHappening from "./whats-happening";

function HomeScreen() {
  return (
      <div>
        <h3>Home</h3>
        <WhatsHappening/>
        <TuitHomeList/>
      </div>
      );
}
export default HomeScreen;