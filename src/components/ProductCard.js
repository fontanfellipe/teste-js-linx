import React from 'react';

const ImageCard = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name}/>
            <h3> {props.name}</h3>
            <p>{props.description}</p>
            <p>De:{props.oldPrice}</p>
            <h4>Por: {props.price}</h4>
            <p>ou: {props.installmentCount} de R${props.installmentValue}</p>

        </div>
    );
}

export default ImageCard;
