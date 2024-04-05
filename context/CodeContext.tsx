import React, { createContext, useContext, useState } from "react";

// Updated to remove setters from default context value
const defaultContextValue = {
  htmlCode: "",
  cssCode: "",
  jsCode: "",
  // Provide either a more generic handler or omit setters
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
