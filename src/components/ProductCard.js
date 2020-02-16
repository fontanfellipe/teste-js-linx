import React from 'react';


//back bone of the product card to nested all needed elements
const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img className="product-image" src={props.image} alt={props.name}/>
            <h4> {props.name}</h4>
            <p>{props.description}</p>
            {/* use the function toFixed to avoid round ups from the json and use the replace function to replace the . to , to match the monetary system in the page */}
            <p>De:R${props.oldPrice.toFixed(2).toString().replace('.',',')}</p>
            <h3>Por:R${props.price.toFixed(2).toString().replace('.',',')}</h3>
            <p>ou: {props.installmentCount}x de R${props.installmentValue.toFixed(2).toString().replace('.',',')}</p>
            <button className="button-buy">Comprar</button>
        </div>
    );
}

export default ProductCard;
