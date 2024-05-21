import React from "react";
import { Helmet } from "react-helmet";
import Calculator from "./Routes/Calculator";

function App() {
  return (
    <>
      <Helmet>
        <title>Calculator App</title>
      </Helmet>
      <Calculator />
    </>
  );
}

export default App;
