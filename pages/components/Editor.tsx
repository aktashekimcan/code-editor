// Editor.js
import React from "react";
import styled from "styled-components";
import AceEditor from "react-ace";
import { useCode } from "../../context/CodeContext"; // Adjust the import path based on your file structure

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-emmet";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const EditorSection = styled.div`
  flex: 1;
  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
`;

const Editor = () => {
  const { htmlCode, setHtmlCode, cssCode, setCssCode, jsCode, setJsCode } =
    useCode();

  const handleChange = (value, language) => {
    if (language === "html") setHtmlCode(value);
    if (language === "css") setCssCode(value);
    if (language === "javascript") setJsCode(value);
  };

  return (
    <EditorContainer>
      {/* HTML Editor */}
      <EditorSection>
        <AceEditor
          mode="html"
          theme="monokai"
          onChange={(value) => handleChange(value, "html")}
          name="html_editor"
          value={htmlCode}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          height="100%"
          width="100%"
        />
      </EditorSection>
      {/* CSS Editor */}
      <EditorSection>
        <AceEditor
          mode="css"
          theme="monokai"
          onChange={(value) => handleChange(value, "css")}
          name="css_editor"
          value={cssCode}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          height="100%"
          width="100%"
        />
      </EditorSection>
      {/* JavaScript Editor */}
      <EditorSection>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={(value) => handleChange(value, "javascript")}
          name="js_editor"
          value={jsCode}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          height="100%"
          width="100%"
        />
      </EditorSection>
    </EditorContainer>
  );
};

export default Editor;
