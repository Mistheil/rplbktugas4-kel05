import React, { useState } from "react";
import logo from "../logo.svg";
import "./Counter.css";
export default function Counter() {
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(true);
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const hideImage = () => {
    setShowImage(!showImage);
  };
  return (
    <div className="Main">
      {/* <p className="Text">Counter with useState</p> //Counter with usestate */}
      {/* <p className="Text">Dalam hati</p> */}
      {/* <p>Dalamnya seberapa</p> */}

      {/* <div className="ViewImage">
                <div className="ViewImage1">
                    <img
                        className="App-logo"
                        style={{ display: showImage === true ? "flex" : "none" }}
                        src={logo} 
                        alt="logo"
                    />
                </div>
                <button className="Button" onClick={hideImage}>
                    {showImage !== true ? "Tampilkan" : "Sembunyikan"}
                </button>
            </div> */}

      <p> KELOMPOK 05</p>

      <div className="App">
        <h1>Text Copier moment</h1>

        <input
          className="TextArea"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Masukkan teks"
        />
        {text ? (
          <h3>
            Simon says <br /> {text}
          </h3>
        ) : (
          ""
        )}
      </div>

      <p className="Text">{count}</p>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={countUp}>
            Naik
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={countDown}>
            Turun
          </button>
        </div>
      </div>
    </div>
  );
}
