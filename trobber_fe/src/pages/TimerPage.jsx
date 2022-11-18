import React from 'react';
import "./TimerPage.css";
import Memo2 from "./components/Memo2";
import Mypage from "./Mypage";
import { useState } from "react";

const TimerPage = () => {
    const [visibility, setVisibility] = useState(false);

    const toggleMenu = () => {
      setVisibility(!visibility);
    };
    const handleMouseDown = (event) => {
      toggleMenu();
    };
    return (
        <>
        <Mypage handleMouseDown={handleMouseDown} visibility={visibility} />
        <div className="root">
            <div className="icons">
                <img className="menubar" onClick={handleMouseDown} src={require("./pageimg/Vector.png")} />
                <img className="graph" src={require("./pageimg/chartIcon.png")} />
            </div>
            <div className="time">
                <img className="timeimg" src={require("./pageimg/region_info.png")} />
                <img className="timeimg2" src={require("./pageimg/time_info.png")} />
                <img className="timeimg3" src={require("./pageimg/elapse_info.png")} />
            </div>
            <div className="countries2">
                <img className="japan" src={require("./pageimg/JAPAN.png")} />
            </div>
            <div className="memo2">
                <Memo2/>
            </div>
            <div className="startbutton2">
                <img className="startbutton2" src={require("./pageimg/startbutton2.png")} />
            </div>
        </div>
        </>
    );
};

export default TimerPage;