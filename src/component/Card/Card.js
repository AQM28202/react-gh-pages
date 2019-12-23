import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className="col-sm-3">
            <div className="card"
                style={{ backgroundImage: `url(${props.image})` }}
                key={props.i}
                data-index={props.index}
                onClick={props.handleClick}
                alt="you click"
            >
            </div>
        </div>
    );
}

export default Card;