/**
 * Created by rroman681 on 5/11/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import CharacterItem from "./containers/CharacterItem";
import defaultState from "./initialState.json";
import storeFactory from "./store";
import "./stylesheets/main.scss"
import GuessForm from "./containers/GuessForm";

// Allow React to be a global object
window.React = React;

// Render it
ReactDOM.render(
    <Provider store={storeFactory(defaultState)}>
        <div>
            <CharacterItem/>
            <GuessForm/>
        </div>
    </Provider>,
    document.getElementById("react-container"));