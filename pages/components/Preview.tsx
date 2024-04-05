import React, { useState } from "react";
import Modal from "react-modal";
import { useCode } from "../../context/CodeContext"; // Gerekli olan yolu doğrulayın

Modal.setAppElement("#__next"); // Proje yapılandırmasına göre ayarlayın

const Preview = () => {
  const { htmlCode, cssCode, jsCode } = useCode();
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    <>
      <button
        className="btn btn-primary"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999", // Modalın üzerinde olmasını sağlar
        }}
        onClick={() => setModalIsOpen(true)}
      >
        Open Preview
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Code Preview"
        style={{
          overlay: {
            zIndex: "1000", // Modalın üzerinde olmasını sağlar
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            overflow: "visible", // Iframe'ın görünür olmasını sağlar
          },
        }}
      >
        <div
          style={{
            background: "#f5f5f5",
            border: "1px solid #ccc",
            padding: "20px",
            height: "80vh",
            width: "80vw",
            overflow: "auto",
            position: "relative",
          }}
        >
          <iframe
            style={{ width: "100%", height: "100%", border: "0" }}
            srcDoc={srcDoc}
            title="preview"
            sandbox="allow-scripts"
          ></iframe>
          <button
            className="btn btn-secondary"
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Preview;
