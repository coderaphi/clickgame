import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div className="card">
            <img className="image" alt={props.name} src={props.image} width={props.width} height={props.width} />
        </div>


    )
}
export default ImageCard;