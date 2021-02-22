import React from "react";
import ReactDOM from "react-dom";
import "./style.css"


class Nav extends React.Component {
    render() {
        return (
            <nav>
                <img src="./images/ironhack-logo.svg" />
                <img src="./images/menu-top.svg" />
            </nav>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <h1 className="white">Say hello to ReactJS</h1>
                <p className="white">You will learn how to use <br />the most popular frontend library, <br />and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
        )
    }
}

class Section2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="box">
                    <img src="./images/icon1.png" />
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="box">
                    <img src="./images/icon2.png" />
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className="box">
                    <img src="./images/icon3.png" />
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
                <div className="box">
                    <img src="./images/icon4.png" />
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </React.Fragment>
        )
    }
}




function App() {
    return (
        <React.Fragment>
            <div className="dark-bg">
                <Nav />
                <Content />
            </div>
            <div className="sec-2">
                <Section2 />
            </div>
        </React.Fragment>
    )
}


ReactDOM.render(<App />, document.querySelector("#root"));