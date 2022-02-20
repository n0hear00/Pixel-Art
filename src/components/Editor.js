import React, { useState } from "react";
import "../styles/editor.scss";
import "../styles/App.css";
import "@fontsource/press-start-2p";
import { CirclePicker } from 'react-color'
import DrawingPanel from "./DrawingPanel";

export default function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("draw");
    const [selectedColor, setColor] = useState("#yeahha");

    function initializeDrawingpanel() {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "draw" 
        ? setButtonText("reset") 
        : setButtonText("draw")
    }

    function changeColor(color) {
        setColor(color.hex);
    }

    return (
    <div id="editor">
        <h1>ReactJS Pixel Art</h1>
        {hideDrawingPanel && <h2>Enter Dimensions</h2>}
        {hideDrawingPanel && (
        <div id="options">
        <div className="option">
            <input 
                type="number" 
                className="panelInput" 
                defaultValue={panelWidth} 
                 onChange={(e) => {setPanelWidth(e.target.value)}}
            ></input>
            <span> Width</span>
        </div>
        <div className="option">
            <input 
                type="number" 
                className="panelInput" 
                defaultValue={panelHeight} 
                 onChange={(e) => {setPanelHeight(e.target.value)}}
            ></input>
            <span>Height</span>
            </div>
        </div>
        )}
    
        {hideOptions && (
        <CirclePicker style={{ padding: "200px" }} color={selectedColor} onChangeComplete={changeColor} />
        )}

        {hideOptions && <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
        />
        }
        <button onClick={initializeDrawingpanel} className="button">{buttonText}</button>
    </div>
    );

}