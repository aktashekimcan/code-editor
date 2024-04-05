import React from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import Footer from "./components/Footer";

const IndexPage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      className="container-fluid"
    >
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
        className="container"
      >
        <Editor />
        <Preview />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
