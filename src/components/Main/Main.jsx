import React, { useContext } from "react";
import {
  ChatDots,
  Code,
  Compass,
  Lightbulb,
  PaperPlaneRight,
  User,
  Image,
  Microphone,
  OpenAiLogo,
} from "@phosphor-icons/react";
import "./Main.css";
import { Context } from "../../context/Context.jsx";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    input,
    setInput,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

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
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <User size={20} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <OpenAiLogo size={32} weight="thin" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <Image size={20} />
              <Microphone size={20} />
              {input ? (
                <button onClick={() => onSent()}>
                  <PaperPlaneRight size={20} />
                </button>
              ) : null}
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
