import React from 'react';
import "./style.css";

function header(props) {
    return (
        <div className="nav-header">
            <ul className="topnav">

                <li>
                    <a id="topbut" className="gamename" href='#'>Clicky Game</a>
                </li>
                <li>
                    <a id="topbut" className="points"  href='#'> score: {0}  |   Top Score: {0}</a>
                </li>

            </ul>


        </div>


    );
}

export default header;

