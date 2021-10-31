import React from "react";
import "./App.css";
import Header from "./components/Header";
import MyCards from "./components/MyCards";

function App() {
  return (
    //BEM(Block Element Modifier) class naming convention
    <div className="app">
      <Header />
      <MyCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
