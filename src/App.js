import React from "react";
import { AppWrapper } from "./styled";
import { GlobalStyle } from "./GlobalStyle";
import Form from "./Form";
import { Clock } from "./Clock";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Clock />
        <Form />
      </AppWrapper>
    </>
  );
}

export default App;