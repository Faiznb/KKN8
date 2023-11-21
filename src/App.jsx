import React from "react";
import Hero from "./Component/Hero";
import Member from "./Component/Member";
import Timeline from "./Component/Timeline";
import Detail from "./Component/Detail";

const App = () => {
  return (
    <div className="ppp-con">
      <Hero />
      <Detail />
      <Member />

      <Timeline />
    </div>
  );
};

export default App;
