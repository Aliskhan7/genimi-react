import React from "react";
import {
  ChatDots,
  Code,
  Compass,
  Lightbulb,
  PaperPlaneRight,
  User,
  Image,
  Microphone,
} from "@phosphor-icons/react";
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
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see on an upcoming road trip.</p>
            <Compass className="cars-icon" size={35} />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <Lightbulb className="cars-icon" size={35} />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <ChatDots className="cars-icon" size={35} />
          </div>
          <div className="card">
            <p>Tell me about React js and React native.</p>
            <Code className="cars-icon" size={35} />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <Image size={20} />
              <Microphone size={20} />
              <PaperPlaneRight size={20} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
