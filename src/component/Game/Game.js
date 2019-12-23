import React from 'react';
import Board from '../board/board';
import Header from '../Header/Header'
import Images from './images.json';
import Jumbotron from '../Jumbotron/Jumbotron';

class Game extends React.Component {

    state = {
        images: Images.images,
        lost: false,
        currentScore: 0,
        highScore: 0,
        initialLoad: true
    }

    componentDidMount() {
        console.log(this.state.images ? "loaded" : "Images failed to load")
        this.randomMizeImages();
        this.chooseMessage();
    }

    handleClick = event => {
        const index = event.target.attributes.getNamedItem("data-index").value;
        const newImageState = this.state.images;

        this.setState({
            initialLoad: false
        })

        if (this.state.lost) {
            this.setState({
                lost: false
            })
        }

        if (newImageState[index].clicked) {
            this.resetBoard();
        } else {
            newImageState[index].clicked = true;
            this.setState({
                images: newImageState,
                currentScore: this.state.currentScore + 1
            })
        }
        this.randomMizeImages();
        this.chooseMessage();
    }

    randomMizeImages() {
        let shuffledImages = this.state.images;
        let currentIndex = this.state.images.length;
        let tempValue;
        let randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempValue = shuffledImages[currentIndex];
            shuffledImages[currentIndex] = shuffledImages[randomIndex];
            shuffledImages[randomIndex] = tempValue;
        }

        this.setState({
            images: shuffledImages
        });
    }

    resetBoard() {
        this.setState({
            lost: true,
            currentScore: 0,
            highScore: (this.state.currentScore > this.state.highScore
                ? this.state.currentScore
                : this.state.highScore)
        })
    }

    chooseMessage() {
        console.log("choosing...");
        if (this.state.initialLoad) {
            return "Click an image to start!";
        }

        return (this.state.lost && !this.state.initialLoad ? "You picked Wrong!" : "You picked correctly!");
    }

    render() {

        return (
            <div style={{ minHeight: "100%", paddingBottom: "100px" }} >
                {}
                <Header
                    currentScore={this.state.currentScore}
                    highScore={this.state.highScore}
                    lost={this.state.lost}
                    messageFunc={this.chooseMessage}
                />
                <Jumbotron>
                    <h1>Clicky Game!</h1>
                    <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                </Jumbotron>
                <div className="container">
                    <Board
                        images={this.state.images}
                        handleClick={this.handleClick}
                    />
                </div>
            </ div>
        );
    }
}
export default Game;