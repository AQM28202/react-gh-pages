import React from 'react';
import  Card from '../Card/Card';
import './style.css';

function Board(props) {
    return (
        <div className="row" id="board">
            {props.images.map((image, i) => (
                <Card
                    image={image.src}
                    handleClick={props.handleClick}
                    index={i}
                    key={i}
                />
            ))}
        </div>
    );
}

export default Board;