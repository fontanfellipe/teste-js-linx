import React from 'react';
import ProductCard from './ProductCard';

//Here is the element to mount the products grid
const Grid = (props) => {
    
    //I take advantage of react prop system to send from App.js the result from the API consult and mount the individual card with all the items from json data. 
    const products = props.products.map((product) => {
        return (
            //Get the data retrived from the map function and send again as props to the ProductCard component to mount the individual product card
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
        //return all mounted cards with the json data to populte the products grid
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

