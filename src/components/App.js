import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Grid from './Grid';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

export class App extends Component {
    state = { products: []}

    componentDidMount() {
        axios.get(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
        .then( response => {
            const products = response.data.products;
            this.setState({products})
        })
    }
    

    render() {
        return (
            <div>
                <Header/>
                <Grid products={this.state.products}/>
                <NewsLetter/>
                <Footer/>

            </div>
        );
    }
}

export default App;

