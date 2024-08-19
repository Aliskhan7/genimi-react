import React from "react";
import { Compass, User } from "@phosphor-icons/react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <User className="user" size={40} />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <Compass size={30} />
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see on an upcoming road trip.</p>
            <Compass size={30} />
          </div>
          <div className="card">
            <p>Suggest beautiful place to see on an upcoming road trip.</p>
            <Compass size={30} />
          </div>
          <div className="card">
            <p>Suggest beautiful place to see on an upcoming road trip.</p>
            <Compass size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
