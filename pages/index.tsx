import React from "react";
import styled from "styled-components";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const IndexPage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Editor />
        <Preview />
      </Content>
      <Footer />
    </Container>
  );
};

export default IndexPage;
