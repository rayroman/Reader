/**
 * Created by rroman681 on 5/23/17.
 */
import React from "react";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "react-icons/lib/fa/home";
import Pencil from "react-icons/lib/fa/pencil";
import Cogs from "react-icons/lib/fa/cogs";
import Search from "react-icons/lib/md/search";
import "../stylesheets/sidebar.scss";

const ShiftedIcon = Component => (
    <Component style={{verticalAlign: "-0.15em", marginRight: "10px"}} />
);

const Sidebar = routeData => {
    const routes = routeData.map((route, index) => {
        const {path, exact, component} = route;
        return (
            <Route
                key={index}
                path={path}
                exact={exact}
                component={component}
            />
        )
    });

    return (
        <Router history={createBrowserHistory()}>
            <div>
                <nav id="sidebar">
                    <h1>Reader</h1>
                    <ul id="navLinks">
                        <li><NavLink exact to="/">{ShiftedIcon(Home)} Home</NavLink></li>
                        <li><NavLink to="/study">{ShiftedIcon(Pencil)} Study</NavLink></li>
                        <li><NavLink to="/search">{ShiftedIcon(Search)} Search</NavLink></li>
                        <li><NavLink to="/edit">{ShiftedIcon(Cogs)} Under the Hood</NavLink></li>
                    </ul>
                </nav>
                {routes}
            </div>
        </Router>
    );
};

export default Sidebar;