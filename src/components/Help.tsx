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