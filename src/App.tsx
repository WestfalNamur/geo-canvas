import React from "react";
import "./utils/App.css";
import Routes from "./Routes";
import AppBarTop from "./components/appBarTop/AppBarTop";

function App() {
  return (
    <div className="App">
      <AppBarTop />
      <Routes />
    </div>
  );
}

export default App;
