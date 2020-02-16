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
        <div className="container">
            {products}
        </div>
    );
}

export default Grid;

