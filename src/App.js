import React from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    //BEM(Block Element Modifier) class naming convention
    <div className="app">
      <Header />
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
