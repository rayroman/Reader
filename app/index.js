/**
 * Created by rroman681 on 5/11/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import CharacterItem from "./components/CharacterItem";
import "./stylesheets/main.scss"

// Allow React to be a global object
window.React = React;

// Include character
const testCharacter = {
    charTrad: "城",
    charSimp: "城",
    lessonNumber: 16,
    heisigNumber: 383,
    absoluteNumber: 511,
    keyword: "city",
    pinyin: "chéng",
};

// Render it
ReactDOM.render(
    <CharacterItem {...testCharacter}/>,
    document.getElementById("react-container"));