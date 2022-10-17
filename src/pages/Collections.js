import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import Musiclist from "../components/Musiclist";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { ReactComponent as Play } from "../assets/icons/play2.svg";

const Collections = () => {
  const colRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(colRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, [colRef]);
  const [filtervalue, setFilter] = useState("collection");
  const [lists, setLists] = useState();
  const changeFilter = (e) => {
    setFilter(e.target.id);
  };
  useEffect(() => {
    setLists(
      Musiclist?.filter((list) => {
        if (filtervalue === "collection") {
          return list.collection === true;
        } else {
          return list.liked === true;
        }
      })
    );
  }, [filtervalue]);
  return (
    <div className="collections">
      <Header />
      <Sidebar />
      <div className="collections__content" ref={colRef}>
        <div className="filters" onClick={changeFilter}>
          <div
            className={`btn ${filtervalue === "collection" && "filter"}`}
            id="collection"
          >
            My Collection
          </div>
          <div
            className={`btn ${filtervalue === "liked" && "filter"}`}
            id="liked"
          >
            Likes
          </div>
        </div>
        <div className="contents">
          {lists?.map((list) => {
            return (
              <div className="song" key={list.id}>
                <div className="song__image">
                  <img src={list.img} alt="" />
                  <div className="song__image__info">
                    <div className="details">
                      <div className="title">{list.title}</div>
                      <div className="artist">{list.artist}</div>
                      <div className="views">{list.likes} likes</div>
                    </div>
                    <div className="play">
                      <Play fill="#FACD66" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
