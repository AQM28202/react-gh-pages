import React from 'react';
import './style.css';

function Header(props) {



    return (
        <ul className="nav fixed-top">
            <li className="align-middle">
                <a href="/">American Poli-Clicks</a>
            </li>
            <li className={`align-middle message ${props.lost ? "wrong" : "right"}`}>
            
                {console.log(props.chooseMessage)}
                {props.lost ? "You picked Wrong!" : "You picked correctly!"}
            </li>
            <li className="align-middle">
                {`Current Score: ${props.currentScore} | High Score: ${props.highScore}`}
            </li>
        </ul>
    );
}

export default Header;