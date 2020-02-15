import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Grid from './Grid';
import Button from './Button';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

export class App extends Component {
    state = { 
        products: [],
        nextPage: ''
    }

    componentDidMount() {
        axios.get(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
        .then( response => {
            const productsPageOne = response.data.products;
            this.setState({products: productsPageOne})
            
        })
    }

    handleCallNextPage = () => {
        axios.get('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2')
        .then(response => {
            const productsPageTwo = response.data.products 
            this.setState((prevState) =>({
                products: prevState.products.concat(productsPageTwo)
            }))
        })
    }

    render() {
        
        return (
            <div>
                <Header/>
                <Grid products={this.state.products} />
                <Button handleCallNextPage={this.handleCallNextPage} />
                <NewsLetter/>
                <Footer/>

            </div>
        );
    }
}

export default App;

