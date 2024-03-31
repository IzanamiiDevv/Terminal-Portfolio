//import React from "react";
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
            <h4>This Command Allow You To Clear The Screen</h4>
            <h5>Syntax: cls</h5>
            <p>This Command is not Case Sensitive and it doesnt have any Properties</p>
        </div>
    )
}

function New() {
    return (
        <div>
            <h3>NEW</h3>
            <h4>This Command is used to Create an Element</h4>
            <h5>Syntax: new</h5>
            <p>This Command is not Case Sensitive and it doesnt have any Properties</p>
        </div>
    )
}

function Echo() {
    return (
        <div>
            <h3>ECHO</h3>
            <h4>This Command is used to Print the Given Text</h4>
            <h5>Syntax: echo {"<text>"}</h5>
            <p>This Command is not Case Sensitive.</p>
            <h4>Property:</h4>
            <p>The Text Property is Used to Handle The Input</p>
            <p>Example usage: <b>echo Hello World!</b></p>
        </div>
    )
}

function Cd() {
    return (
        <div>
            <h3>CD</h3>
            <h4>Change Directory is Used to Navigate This Website</h4>
            <h5>Syntax: cd {"<directory>"}</h5>
            <p>This Command is not Case Sensitive.</p>
            <h4>Property:</h4>
            <p>Home</p>
            <p>Skills</p>
            <p>Contact</p>
            <p>All of This Property Values is Not Case Sensitive.</p>
            <p>Example usage: <b>cd Home</b></p>
        </div>
    )
}

function HelpP() {
    return (
        <div>
            <h3>HELP</h3>
            <h4>help command is used to learn Information about Certain Things</h4>
            <h5>Syntax: cd {"<command>"}</h5>
            <p>This Command is not Case Sensitive.</p>
            <h4>Property:</h4>
            <p>cls</p>
            <p>new</p>
            <p>echo</p>
            <p>cd</p>
            <p>help</p>
            <p>All of This Property Values is Not Case Sensitive.</p>
            <p>Example usage: <b>help echo</b></p>
        </div>
    )
}

export { Cls, New, Echo, Cd, HelpP };