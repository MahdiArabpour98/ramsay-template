"use client";

import ReactFullpage from "@fullpage/react-fullpage";

import Hero from "@/components/hero";
import MyExperties from "@/components/my-experties";
import Experiences from "@/components/experiences";

export default function Home() {
  return (
    // <main>
    //
    // </main>
    <ReactFullpage
      navigation
      navigationPosition="left"
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Hero />
            </div>
            <div className="section">
              <MyExperties />
            </div>
            <div className="section">
              <Experiences />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
