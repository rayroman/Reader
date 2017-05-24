/**
 * Created by rroman681 on 5/23/17.
 */
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CharacterItem from "./containers/CharacterItem";

// Route configuration: will add more as necessary. For now, just need testing and searching
const routes = [
    {
        path: "/",
        exact: true,
        component: CharacterItem // Todo: fill in later
    },
    {
        path: "/study",
        component: null // Todo: fill in later
    },
    {
        path: "/search",
        component: null
    }
];

export default Sidebar(routes);
