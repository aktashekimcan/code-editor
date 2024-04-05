import React, { createContext, useContext, useState } from "react";

// Provide a default context value that matches the shape of your context
const CodeContext = createContext({
  htmlCode: "",
  setHtmlCode: () => {},
  cssCode: "",
  setCssCode: () => {},
  jsCode: "",
  setJsCode: () => {},
});

export const useCode = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  return (
    <CodeContext.Provider
      value={{ htmlCode, setHtmlCode, cssCode, setCssCode, jsCode, setJsCode }}
    >
      {children}
    </CodeContext.Provider>
  );
};
