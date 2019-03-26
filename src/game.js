import React, { Component } from 'react'
import Header from './components/header'
import characters from "./characters.json"
import ImageCard from "./components/ImageCard"
import Wrapper from './components/wrapper'


class Game extends Component {
    state = {
        characters,
        Header,
 };




    shuffle = () => {
        var array = this.state.characters;
        var ctr = array.length;
        var temp;
        var index;

        while (ctr > 0) {
            index= index +1
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
            if(index>2){
                alert("clicked more than once")

            }

        }
        

        this.setState({
            characters: array
        });


    };

    render() {
        return (
            <>
                <Header />
                <Wrapper>


                    <div className="imgContainer" >

                        {this.state.characters.map(character => (
                            <div className="imgCard" onClick={this.shuffle} showAlert={this.id}>
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