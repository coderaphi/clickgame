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
                    <a id="alert" className="gamename" href='#'>You Lose</a>
                </li>
            
                <li>
                    <a id="topbut" className="points"  href='#'> score:&nbsp;&nbsp;{props.score}  |   Top Score:&nbsp;&nbsp; {props.topscore}</a>
                </li>

            </ul>


        </div>


    );
}

export default header;

