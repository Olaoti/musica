import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Topcharts from "../components/Topcharts";
import Tops from "../components/Tops";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__contents">
        <Sidebar />
        <div className="home__contents__section">
          <Main />
          <Topcharts />
        </div>
      </div>
      <Tops />
    </div>
  );
};

export default Home;
