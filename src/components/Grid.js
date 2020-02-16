import React from 'react';
import ProductCard from './ProductCard';

const Grid = (props) => {
    console.log(props.products);

    const products = props.products.map((product) => {
        return (
            <div key={product.id}>
                <ProductCard 
                    image={product.image}
                    name={product.name} 
                    oldPrice={product.oldPrice}
                    price={product.price}
                    description={product.description}
                    installmentCount = {product.installments.count}
                    installmentValue = {product.installments.value}
                />
            </div>
        )
    })
    return (
        <div>
            <div className="central-cont-container-text">
                <h3>Sua seleção especial</h3>
            </div>
            <div className="grid">
                {products}
            </div>
        </div>
     
    );
}

export default Grid;

