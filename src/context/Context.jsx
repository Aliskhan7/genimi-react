import { createContext, useState } from "react";
import runChat from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    const response = await runChat(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  onSent("what is react");

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    input,
    setInput,
    showResult,
    loading,
    resultData,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
