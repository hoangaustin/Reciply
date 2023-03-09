import React, { useState } from "react";
import Ingredients from "./components/ingredients";
import './styles.scss';

const App = () => {

  return (
    <>
      <h1>Recipe Generator</h1>
      <Ingredients />
    </>
  )
};

export default App;