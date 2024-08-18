import React from "react";
import "./sidebar.css";
import {
  ArrowCounterClockwise,
  ChatTeardrop,
  Gear,
  List,
  Plus,
  Question,
} from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <List size={20} className="menu" />
        <div className="new-chat">
          <Plus size={20} />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <ChatTeardrop size={20} />
            <p>What is React...</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <Question size={20} />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <ArrowCounterClockwise size={20} />
          <p>Activities</p>
        </div>
        <div className="bottom-item recent-entry">
          <Gear size={20} />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
