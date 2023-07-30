import React from "react";
import InputForm from "./components/InputForm";
import Alert from "./components/Alert";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <InputForm />
      <Results />
      <Alert />
    </div>
  );
}

export default App;
