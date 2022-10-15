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
          <Homesvg fill="#FACD66" />
        </div>
        <div>
          <Collectionsvg fill="#aaa" />
        </div>
        <div>
          <Radiosvg fill="#EFEEE0" />
        </div>
        <div>
          <Videosvg fill="#EFEEE0" />
        </div>
      </div>
      <div className="downlinks">
        <div>
          <Personsvg fill="#EFEEE0" />
        </div>
        <div>
          <Logoutsvg fill="#EFEEE0" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
