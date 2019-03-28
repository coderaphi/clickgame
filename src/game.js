import React, { Component } from 'react'
import Header from './components/header'
import characters from "./characters.json"
import ImageCard from "./components/ImageCard"
import Wrapper from './components/wrapper'

class Game extends Component {
    state = {
        characters: characters,
        score: 0,
        topscore: 0,
        clickedIds: [],
        shake: '',
        alert:""
    };

    handleClick = (id) => {
        // this.shuffle()
        const { clickedIds, score } = this.state;


        // const clickedIds = this.state.clickedIds;
        if (clickedIds.includes(id)) {
            // alert("duplicate click")
            this.setState({
                clickedIds: [],
                score: 0,
                shake: 'shake',
                alert: 'You Lose'

            });
        } else {
            clickedIds.push(id);
            this.setState({
                clickedIds: clickedIds,
                score: score + 1,
                shake: '',
                alert: ''

            });
            this.scorecalc();
            this.shuffle();

        }
    }

    scorecalc = () => {

        
        if (this.state.score > this.state.topscore) {
            this.setState({topscore: this.state.score})
        }

    }
    shuffle = () => {
        var array = this.state.characters;
        var ctr = array.length;
        var temp;
        var index;


        while (ctr > 0) {

            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        this.setState({
            characters: array

        });
    };

    render() {
        return (
            <>
                <Header
                    topscore={this.state.topscore}
                    score={this.state.score}
                    alert={this.state.alert}

                >
                </Header>
                <Wrapper>
                    <div className={`imgContainer ${this.state.shake}`} >

                        {this.state.characters.map((character, index) => (
                            <div className="imgCard" onClick={() => this.handleClick(character.id)}>
                                <ImageCard
                                    key={character.id}
                                    image={character.image}
                                    width={'120px'}
                                >
                                </ImageCard >
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </>

        );
    }
}


export default Game;