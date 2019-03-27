import React from 'react';
import "./style.css";
 

function header(props) {
    return (
        <div className="nav-header">
            <ul className="topnav">

                <li>
                    <a id="gamename" className="gamename" href='/'>Clicky Game</a>
                </li>
                <li>
                    <a id="alert" className="alert" href='#'> You Lose</a>
                </li>
            
                <li>
                    <a id="topbut" className="points"  href='#'> Score:&nbsp;&nbsp;{props.score}  |   Top Score:&nbsp;&nbsp; {props.topscore}</a>
                </li>

            </ul>
                <div className="banner">
                    Clicky game : The Memory Tester
                </div>


        </div>


    );
}

export default header;

