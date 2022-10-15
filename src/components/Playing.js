import React, { useRef, useState, useEffect } from "react";
import { ReactComponent as Play } from "../assets/icons/play.svg";
import { ReactComponent as Previous } from "../assets/icons/previous.svg";
import { ReactComponent as Next } from "../assets/icons/next.svg";
import { ReactComponent as Shuffle } from "../assets/icons/shuffle.svg";
import { ReactComponent as Repeat } from "../assets/icons/repeat.svg";
import { ReactComponent as Repeat1 } from "../assets/icons/repeat1.svg";
import { ReactComponent as Volume } from "../assets/icons/volume.svg";
import { ReactComponent as Replay } from "../assets/icons/replay.svg";
import { ReactComponent as Pause } from "../assets/icons/pause.svg";
import ReactSlider from "react-slider";

import Currentno from "./Currentno";
import Musiclist from "./Musiclist";

const Playing = () => {
  const [number, setNumber] = useState(Currentno);
  const [pause, setPause] = useState(true);
  const audioplayingRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  //const [percentDuration, setPercent] = useState(0);
  const [shuffle, setShuffle] = useState(true);
  const [repeat, setRepeat] = useState(true);
  const [volume, setVolume] = useState(0.5);
  useEffect(() => {
    audioplayingRef.current.volume = volume;
    if (pause) {
      audioplayingRef.current.pause();
    } else {
      audioplayingRef.current.play();
    }
  }, [pause, number]);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(audioplayingRef.current.currentTime);
      setDuration(audioplayingRef.current.duration);
      /*setPercent((progress / duration) * 100);*/
    }, 1000);
    return () => clearInterval(interval);
  }, [progress, duration]);
  useEffect(() => {
    if (repeat) {
      if (
        Math.floor(audioplayingRef.current.currentTime) ===
        Math.floor(audioplayingRef.current.duration)
      ) {
        setNumber(number + 1);
      }
    } else {
      setNumber(number);
    }
  }, [progress, duration, repeat, number]);
  /*Next and previous clicks*/
  const nextClick = () => {
    if (repeat) {
      if (number < Musiclist.length - 1) {
        setNumber(number + 1);
      } else {
        setNumber(Musiclist.length - 1);
      }
    }
  };
  const prevClick = () => {
    if (repeat) {
      if (number > 0) {
        setNumber(number - 1);
      } else {
        setNumber(0);
      }
    }
  };
  /*reduce the length of names */
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="playing">
      <audio src={Musiclist[number]?.song} ref={audioplayingRef}></audio>
      <div className="playing__section">
        <div className="playing__section__img">
          <img src={Musiclist[number]?.img} alt="" />
        </div>
        <div className="songtitle">
          {truncate(Musiclist[number]?.title, 15)}{" "}
          <span className="artist">
            {" "}
            {truncate(Musiclist[number]?.artist, 15)}
          </span>
        </div>
        <div className="control">
          <div className="control__changes">
            <div className="icon" onClick={() => setShuffle(!shuffle)}>
              {shuffle ? <Shuffle fill="white" /> : <Replay fill="white" />}
            </div>
            <div className="icon" onClick={prevClick}>
              <Previous fill="white" />
            </div>
            <div className="icon" onClick={() => setPause(!pause)}>
              {pause ? <Play fill="#FACD66" /> : <Pause fill="#FACD66" />}
            </div>
            <div className="icon" onClick={nextClick}>
              <Next fill="white" />
            </div>
            <div className="icon" onClick={() => setRepeat(!repeat)}>
              {repeat ? <Repeat1 fill="white" /> : <Repeat fill="white" />}
            </div>
          </div>
          {/*<div className="control__progress">
            <div
              className="listened"
              style={{ width: `${percentDuration}%` }}
            ></div>
            <div className="circle">
              <span></span>
            </div>
  </div>*/}
          <div className="slidecontainer">
            <input
              id="music-range"
              class="range"
              type="range"
              min="1"
              max={`${duration}`}
              value={progress}
              onChange={({ target: { value: radius } }) => {
                setProgress(radius);
                audioplayingRef.current.currentTime =
                  (radius * audioplayingRef.current.duration) / 100;
                console.log(radius);
              }}
            />
          </div>
        </div>
        <div className="volume__section">
          <div className="icon">
            <Volume fill="white" />
          </div>
          <div className="slidecontainer">
            <input
              id="volume-range"
              class="range"
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={({ target: { value: radius } }) => {
                setVolume(radius / 100);
                audioplayingRef.current.volume = radius / 100;
              }}
            />
          </div>
          {/*<div className="volume">
           <div className="percent" style={{ width: "48%" }}></div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Playing;
