import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Grid from './Grid';
import Button from './Button';
import NewsLetter from './NewsLetter';
import Footer from './Footer';


//main class from the webpage. Here is where all components are called to mount the webpage
export class App extends Component {
    state = { 
        //I make this state to update it when the api is called to have the objects with all data to mount the products grid
        products: [],
    }

    //url from first 8 products
    urlPageOne = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';
    urlPageTwo = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2';
    
    //I call this lifecycle method to when the component is mounted the called the API and then update the products state. When the products state is updated this data is passed is props to Grid.js to use that data to mount the products grid view.
    componentDidMount() {
        //I use axios to retrieve the data, I could use fetch, but that was just a personal preference.
        axios.get(this.urlPageOne)
        .then( response => {
            //Updating the products state with the data retrieved from the fetched url
            const productsPageOne = response.data.products;
            this.setState({products: productsPageOne})
        })
        //some error handling 
        .catch(function(err){ 
            console.error('Failed retrieving information', err)
          });
    }
    //This function is called when the button "Ainda mais produtos aqui!" is clicked. The function call the page two of products populating the grid with more 8 products.
    handleCallNextPage = () => {
        axios.get(this.urlPageTwo)
        .then(response => {
            //Updating the products state with more 8 products with the page 02 url. I use concat() to get the previous data with the new data and make a new array to the state.
            const productsPageTwo = response.data.products 
            this.setState((prevState) =>({
                products: prevState.products.concat(productsPageTwo)
            }))
        })
        //some error handling
        .catch(function(err){ 
            console.error('Failed retrieving information', err);
          });
    }
    render() {
        return (
            //the app returning the webpage mounted with all components compounding the page
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

