import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Topcharts from "../components/Topcharts";
import Tops from "../components/Tops";
import gsap from "gsap";

const Home = () => {
  const homeRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(homeRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, [homeRef]);
  return (
    <div className="home">
      <Header />
      <div className="home__contents">
        <Sidebar />
        <div className="home__contents__section" ref={homeRef}>
          <Main />
          <Topcharts />
        </div>
      </div>
      <Tops />
    </div>
  );
};

export default Home;
