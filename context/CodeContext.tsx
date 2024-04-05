import React, { createContext, useContext, useState } from "react";

// Providing a comprehensive default context value with no-op functions for setters
const defaultContextValue = {
  htmlCode: "",
  setHtmlCode: () => {}, // No-op function
  cssCode: "",
  setCssCode: () => {}, // No-op function
  jsCode: "",
  setJsCode: () => {}, // No-op function
};

const CodeContext = createContext(defaultContextValue);

export const useCode = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const value = {
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
  };

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
};
