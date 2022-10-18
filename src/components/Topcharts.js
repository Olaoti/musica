import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Lovesvg } from "../assets/icons/love.svg";
import { ReactComponent as Lovefilledsvg } from "../assets/icons/lovefilled.svg";
/*import img1 from "../assets/images/album/img1.png";
import img2 from "../assets/images/album/img2.png";
import img3 from "../assets/images/album/img3.png";*/
import Musiclist from "./Musiclist.js";

const Topcharts = () => {
  /*const musics = [
    {
      id: 1,
      img: img1,
      title: "golden age of 80's",
      artist: "DJ YK mule",
      time: "2:40:34",
    },
    {
      id: 2,
      img: img2,
      title: "golden age of 80's",
      artist: "DJ YK mule",
      time: "2:40:34",
    },
    {
      id: 3,
      img: img3,
      title: "golden age of 80's",
      artist: "DJ YK mule",
      time: "2:40:34",
    },
  ];*/
  const newlist = Musiclist.filter((song) => {
    return song.id <= 2;
  });

  const [liked, setLiked] = useState(false);
  return (
    <div className="topcharts">
      <div className="head">Top Charts</div>
      <div className="songs">
        {newlist.map((music) => {
          return (
            <div className="song">
                <div className="song__image">
              <Link to="/album" className="link" key={music.id}>

                  <img src={music.img} alt="" />
              </Link>

                </div>
                <div className="song__info">
              <Link to="/album" className="link" key={music.id}>

                  <div className="song__info__title">{music.title}</div>
                  <div className="song__info__artist">{music.artist}</div>
                  <div className="song__info__time">{music.time}</div>
                  </Link>
                </div>
              <div className="song__loved">
                <div className="song__loved__icon">
                  {liked ? (
                    <Lovefilledsvg
                      fill="#FACD66"
                      onClick={() => {
                        setLiked(false);
                      }}
                    />
                  ) : (
                    <Lovesvg
                      fill="#FACD66"
                      onClick={() => {
                        setLiked(true);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topcharts;
