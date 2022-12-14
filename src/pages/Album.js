import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Musiclist from "../components/Musiclist";
import { ReactComponent as Colsvg } from "../assets/icons/addtocol.svg";
import { ReactComponent as Playsvg } from "../assets/icons/play.svg";
import { ReactComponent as Lovedsvg } from "../assets/icons/loved.svg";
import { ReactComponent as Lovesvg } from "../assets/icons/love.svg";
import { ReactComponent as Lovefilledsvg } from "../assets/icons/lovefilled.svg";
import gsap from "gsap";

const Album = () => {
  const albumRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(albumRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, [albumRef]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [list, setList] = useState(Musiclist);
  const [checked, setChecked] = useState(0);
  const resetchecked = (id) => {
    setChecked(id);
  };
  const likedClick = (id) => {
    const newlist = [...list];
    var index = list?.findIndex((ind) => ind.id === id);
    if (newlist[index].liked === false) {
      newlist[index].liked = true;
      newlist[index].likes++;
    } else {
      newlist[index].liked = false;
      newlist[index].likes--;
    }
    setList(newlist);
  };
  const clikeClick = () => {
    const newlist = [...list];
    if (newlist[checked].liked === false) {
      newlist[checked].liked = true;
      newlist[checked].likes++;
    } else {
      newlist[checked].liked = false;
      newlist[checked].likes--;
    }
    setList(newlist);
  };
  const collectionClicked = () => {
    const newlist = [...list];
    newlist[checked].collection = true;
    setList(newlist);
  };
  /*set checked from location*/
  const location = useLocation();
  const { newChecked } = location.state ? location.state : 0;
  useEffect(() => {
    if (newChecked <= Musiclist?.length) {
      setChecked(newChecked);
    } else {
      setChecked(0);
    }
  }, [newChecked]);

  return (
    <div
      className="album"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.85),rgba(0,0,0,1)),url(${Musiclist[checked]?.img})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <div className="album__contents">
        <Sidebar />
        <div className="album__contents__section" ref={albumRef}>
          <div className="checked-album">
            <div className="checked-album__img">
              <img src={Musiclist[checked]?.img} alt="" />
            </div>
            <div className="checked-album__info">
              <div className="title">{Musiclist[checked]?.title}</div>
              <div className="words">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem dolor illo commodi sit, nihil possimu dolor illo
                commodi sit, nihil possimu
              </div>
              <div className="littleinfo">64 songs - 16 hrs+</div>
              <div className="buttons">
                <div className="btn">
                  <span className="icon">
                    <Playsvg fill="#FACD66" />
                  </span>
                  <span>Play all</span>
                </div>
                <div className="btn" onClick={collectionClicked}>
                  <span className="icon">
                    <Colsvg />
                  </span>
                  <span>
                    {Musiclist[checked]?.collection === true
                      ? "Added to collection"
                      : "Add to collection"}
                  </span>
                </div>
                <div className="btn">
                  <div className="icon" onClick={clikeClick}>
                    {Musiclist[checked]?.liked === false ? (
                      <Lovesvg fill="white" />
                    ) : (
                      <Lovefilledsvg fill="#E5524A" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="musics">
            {list
              ?.filter((music) => music.id !== checked)
              .map((song) => {
                return (
                  <div className="song" key={song.id}>
                    <div
                      className="song__img"
                      onClick={() => {
                        resetchecked(song.id);
                      }}
                    >
                      <img src={song.img} alt="" />
                    </div>
                    <div
                      className="song__icon"
                      onClick={() => {
                        likedClick(song.id);
                      }}
                    >
                      {song.liked === false ? (
                        <Lovedsvg />
                      ) : (
                        <Lovedsvg fill="white" />
                      )}
                    </div>
                    <div
                      className="song__info"
                      onClick={() => {
                        resetchecked(song.id);
                      }}
                    >
                      <div className="artist">
                        <span>{song.title}</span>~ <span>{song.artist}</span>
                      </div>
                      <div className="single">
                        {song.artist.includes("ft") ? "Collab" : "Single"}
                      </div>
                    </div>
                    <div
                      className="song__time"
                      onClick={() => {
                        resetchecked(song.id);
                      }}
                    >
                      <div className="duration">{song.time}</div>
                      <div className="options">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
