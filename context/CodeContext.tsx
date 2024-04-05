// CodeContext.js
import React, { createContext, useContext, useState } from 'react';

const CodeContext = createContext();

export const useCode = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  return (
    <CodeContext.Provider value={{ htmlCode, setHtmlCode, cssCode, setCssCode, jsCode, setJsCode }}>
      {children}
    </CodeContext.Provider>
  );
};
