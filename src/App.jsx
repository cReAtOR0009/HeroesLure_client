import { useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Map from "./components/Map";
import Nav from "./components/Nav";
// import TestComponent from "./components/TestComponent";

function App() {
  return (
    <>
    <Nav />
      <div className="">
        <LeftSide />
        <Map />
        <RightSide />
      </div>
    </>
  );
}

export default App;
