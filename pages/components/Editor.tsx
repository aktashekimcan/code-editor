import React from "react";
import AceEditor from "react-ace";
import { useCode } from "../../context/CodeContext";

// Ace Editor required imports
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-emmet";

// Make sure Bootstrap CSS is included in your project

const Editor = () => {
  const { htmlCode, setHtmlCode, cssCode, setCssCode, jsCode, setJsCode } =
    useCode();

  const handleChange = (value, language) => {
    if (language === "html") setHtmlCode(value);
    if (language === "css") setCssCode(value);
    if (language === "javascript") setJsCode(value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* HTML Editor */}
        <div className="col-md-4 col-sm-12" style={{ padding: 0 }}>
          <div
            style={{
              backgroundColor: "#6c757d",
              color: "white",
              padding: "10px",
              textAlign: "center",
            }}
          >
            HTML Editor
          </div>
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
            height="600px"
            width="100%"
          />
        </div>
        {/* CSS Editor */}
        <div
          className="col-md-4 col-sm-12"
          style={{
            padding: 0,
            borderLeft: "1px solid #ddd",
            borderRight: "1px solid #ddd",
          }}
        >
          <div
            style={{
              backgroundColor: "#6c757d",
              color: "white",
              padding: "10px",
              textAlign: "center",
            }}
          >
            CSS Editor
          </div>
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
            height="600px"
            width="100%"
          />
        </div>
        {/* JavaScript Editor */}
        <div className="col-md-4 col-sm-12" style={{ padding: 0 }}>
          <div
            style={{
              backgroundColor: "#6c757d",
              color: "white",
              padding: "10px",
              textAlign: "center",
            }}
          >
            JavaScript Editor
          </div>
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
            height="600px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
