import React, { createContext, useContext, useState } from "react";

// Adjusting the default context to be more generic
const defaultContextValue = {
  htmlCode: "",
  // Adjusting function signatures to accept a string, aligning with useState setters
  setHtmlCode: (code) => {},
  cssCode: "",
  setCssCode: (code) => {},
  jsCode: "",
  setJsCode: (code) => {},
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
