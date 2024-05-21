import React, { createContext, useState } from "react";
import { Helmet } from "react-helmet";
import Calculator from "./Routes/Calculator";

function App() {
  return (
    <>
      <Helmet>
        <title>UVX Challenge - Yunseok Hong</title>
      </Helmet>
      <Calculator />
    </>
  );
}

export default App;
