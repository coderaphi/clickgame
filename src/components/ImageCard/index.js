import React, { Component } from "react";
import "./style.css";

// function ImageCard(props) {
//     return (
//         <div className="card">
//             <img className="image" alt={props.name} src={props.image} />
//         </div>


//     )
// }

class ImageCard extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.width
        };
    }
    onHover = (type) => {
        console.log(type);
        if(type === 'over') {
            this.setState({
                width: '190px',
                height: '190px'
            });
        } else {
            this.setState({
                width: this.props.width,
                height: this.props.width
            });
        }
    };

    render() {
        return (
            <div className="card">
                <img 
                    className="image" 
                    alt={this.props.name} 
                    src={this.props.image} 
                    width={this.state.width} 
                    height={this.state.height} 
                    onMouseOver={() => this.onHover('over')}
                    onMouseOut={() => this.onHover('out')}
                />
            </div>
        )
    }
}
export default ImageCard;