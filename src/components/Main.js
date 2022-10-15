import React from "react";
import person1 from "../assets/images/people/Ellipse 2.png";
import person2 from "../assets/images/people/Ellipse 3.png";
import person3 from "../assets/images/people/Ellipse 4.png";
import person4 from "../assets/images/people/Ellipse 5.png";
import person5 from "../assets/images/people/Ellipse 6.png";
import mainimg from "../assets/images/mainimg.png";
import maindesign from "../assets/images/maindesign.svg";

import { ReactComponent as Lovefilled } from "../assets/icons/lovefilled.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="maindesign">
        <img src={maindesign} alt="" />
      </div>
      <div className="main__texts">
        <div className="main__texts__play">Currated playlist</div>
        <div className="main__texts__head">R & B Hits</div>
        <div className="main__texts__lyrics">
          All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
          habit, and so much more
        </div>
        <div className="likes-section">
          <div className="people">
            <img src={person1} alt="" />
            <img src={person2} alt="" />
            <img src={person3} alt="" />
            <img src={person4} alt="" />
            <img src={person5} alt="" />
          </div>
          <div className="like">
            <Lovefilled fill="white" />
            <div className="like__figure">33K likes</div>
          </div>
        </div>
      </div>
      <div className="main__image">
        <img src={mainimg} alt="" />
      </div>
    </div>
  );
};

export default Main;
