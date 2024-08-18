import React, { useState } from "react";
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
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <List
          onClick={() => setExtended((prev) => !prev)}
          size={20}
          className="menu"
        />
        <div className="new-chat">
          <Plus size={20} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <ChatTeardrop size={20} />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <Question size={20} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <ArrowCounterClockwise size={20} />
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <Gear size={20} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
