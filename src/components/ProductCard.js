import React from 'react';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img className="product-image" src={props.image} alt={props.name}/>
            <h4> {props.name}</h4>
            <p>{props.description}</p>
            <p>De:R${props.oldPrice}</p>
            <h3>Por:R${props.price}</h3>
            <p>ou: {props.installmentCount}x de R${props.installmentValue}</p>
            <button className="button-buy">Comprar</button>
        </div>
    );
}

export default ProductCard;
