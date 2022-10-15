import React, { useState } from "react";
/*import img1 from "../assets/images/album/img1.png";
import img2 from "../assets/images/album/img2.png";
import img3 from "../assets/images/album/img3.png";
import img4 from "../assets/images/album/img4.png";
import img5 from "../assets/images/album/img5.png";
import img6 from "../assets/images/album/img6.png";
import img7 from "../assets/images/album/img7.png";
import img8 from "../assets/images/album/img8.png";
import img9 from "../assets/images/album/img9.png";
import img10 from "../assets/images/album/img10.png";*/
import Musiclist from "./Musiclist";
import Currentno from "./Currentno";

const Tops = () => {
  /*const musics = [
    {
      id: 1,
      img: img9,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 2,
      img: img4,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 3,
      img: img5,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 4,
      img: img6,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 5,
      img: img7,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 6,
      img: img8,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 7,
      img: img3,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 8,
      img: img2,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 9,
      img: img1,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
    {
      id: 10,
      img: img10,
      title: "golden age of 80's",
      artist: "DJ YK mule",
    },
  ];*/
  const [list, setList] = useState(Musiclist);
  const [number, setNumber] = useState(Currentno);
  const newNo = (id) => {
    setNumber(id);
  };
  /*useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4bdb90437msha37cea5571e4e0ep1d9cd1jsnf551f0b200ca",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    fetch(
      "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setList(response.tracks))
      .catch((err) => console.error(err));
  }, []);*/
  return (
    <div className="tops">
      <div className="head">New Releases</div>
      <div className="songs">
        {list.map((music) => {
          return (
            <div
              className="song"
              key={music.id}
              onClick={() => newNo(music.id)}
            >
              <div className="song__img">
                <img src={music.img} alt="" />
              </div>
              <div className="song__title">{music.title}</div>
              <div className="song__artist">{music.artist}</div>
            </div>
          );
        })}
      </div>
      <div className="head">Popular in your area</div>
      <div className="songs">
        {list?.map((music) => {
          return (
            <div className="song" key={music.id}>
              <div className="song__img">
                <img src={music.img} alt="" />
              </div>
              <div className="song__title">{music.title}</div>
              <div className="song__artist">{music.artist}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tops;
