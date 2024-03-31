import React from "react";
import './Help.css'

function Help(){
    return (
        <div id="HELP">
            <h3>List of Commands.</h3>
            <div className="list">
                <div>
                    <h5>cls</h5>
                    <p>Clear The Screen</p>
                </div>
                <div>
                    <h5>new</h5>
                    <p>Create a new Element</p>
                </div>
                <div>
                    <h5>echo {"<text>"}</h5>
                    <p>Printing The Text</p>
                </div>
                <div>
                    <h5>cd {"<path>"}</h5>
                    <p>Change The Current Directory</p>
                </div>
            </div>
            <div className="list">
                <div>
                    <h5>help {"<command>"}</h5>
                    <p>Give You The Information <br /> About The Command</p>
                </div>
            </div>
        </div>
    )
}

export default Help;

function Cls() {
    return (
        <div>
            <h3>CLS</h3>
        </div>
    )
}

function New() {
    return (
        <div>
            <h3>NEW</h3>
        </div>
    )
}

function Echo() {
    return (
        <div>
            <h3>ECHO</h3>
        </div>
    )
}

function Cd() {
    return (
        <div>
            <h3>CD</h3>
        </div>
    )
}

function HelpP() {
    return (
        <div>
            <h3>HELP</h3>
        </div>
    )
}

export { Cls, New, Echo, Cd, HelpP };