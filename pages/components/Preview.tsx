// Preview.js
import React from "react";
import styled from "styled-components";
import { useCode } from "../../context/CodeContext"; // Adjust the import path based on your file structure

const PreviewContainer = styled.div`
  background: #f5f5f5;
  border: 1px solid #ccc;
  margin: 20px;
  padding: 20px;
  height: 100%;
  overflow: auto;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Preview = () => {
  const { htmlCode, cssCode, jsCode } = useCode();

  const srcDoc = `
    <html>
    <head>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}</script>
    </body>
    </html>
  `;

  return (
    <PreviewContainer>
      <Iframe srcDoc={srcDoc} title="preview" sandbox="allow-scripts"></Iframe>
    </PreviewContainer>
  );
};

export default Preview;
