import React from "react";
import { ReactComponent as Logosvg } from "../assets/icons/logo.svg";
import { ReactComponent as Searchsvg } from "../assets/icons/search.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="musicicon">
        <Logosvg />{" "}
      </div>
      <div className="searchbar">
        <div className="icon">
          {" "}
          <Searchsvg fill='rgba(255,255,255,.25)'/>{" "}
        </div>
        <input type="text" placeholder="Search artists" />
      </div>
    </div>
  );
};

export default Header;
