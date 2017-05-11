/**
 * Created by rroman681 on 5/11/17.
 */
import React from "react";
import ReactDOM from "react-dom";

// Creating a test component
class HelloWorld extends React.Component {
    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}

// Render it
ReactDOM.render(<HelloWorld/>, document.getElementById("react-container"));