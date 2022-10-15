import React from "react";
import { ReactComponent as Homesvg } from "../assets/icons/home.svg";
import { ReactComponent as Collectionsvg } from "../assets/icons/collection.svg";
import { ReactComponent as Radiosvg } from "../assets/icons/radio.svg";
import { ReactComponent as Videosvg } from "../assets/icons/video.svg";
import { ReactComponent as Personsvg } from "../assets/icons/person.svg";
import { ReactComponent as Logoutsvg } from "../assets/icons/logout.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="toplinks">
        <div>
          <Homesvg
            fill="#FACD66"
            viewBox="0 0 50 50"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <Collectionsvg
            fill="#aaa"
            viewBox="0 0 50 50"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <Radiosvg
            fill="#EFEEE0"
            viewBox="0 0 50 50"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <Videosvg
            fill="#EFEEE0"
            viewBox="0 0 50 50"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      </div>
      <div className="downlinks">
        <div>
          <Personsvg
            fill="#EFEEE0"
            viewBox="0 0 50 50"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <Logoutsvg
            fill="#EFEEE0"
            viewBox="0 0 50 50"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
