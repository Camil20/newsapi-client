/*import logo from './logo.svg';*/
import './App.css';
import News from './componentes/News';
import Search from './componentes/Search.jsx';

import React, { Component } from 'react';
import axios from 'axios';
import { categories, countries } from './Selects/SelectsCC';
import Select from 'react-select';


class App extends Component {

  state = {
    loading: true,
    articles: [],
    category: 'us',
    pais: '',
  }

  componentDidMount() {
    this.searchh(null)
  }

  handleSearch = (value) => {
    this.searchh(value)
    
  }


  searchh = (value) => {
    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ebdaf6dfd8c94a89a85b5637c99b7382&pagesize=100"

    if (value != null) {
      //const categoria = document.querySelector("#categoria").value;
      apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ebdaf6dfd8c94a89a85b5637c99b7382&pagesize=100&q=" + value
    }

    axios.get(apiURL)
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          loading: false,       
          categoria: this.state.category,
          country: this.state.pais   
        })
      })    
      
  }

  setCategories = (opc) => {
    this.setState({
      categoria: opc.value
      
    });
  }

  setCountries = (opc) => {
    this.setState({
      pais: opc.value
      
    });
  }

  render() {
    return (

      <div className="App container" >
        <header>
          <h1>
            <img src="/noticias.gif" className="image" />
          </h1>
        </header>

        <div style={{ float: "right" }}>
          <Select options={categories} placeholder='Select category' onChange={this.setCategories} className='selectLbl' />
          <div style={{ height: "10px" }} />
        </div>

        <Select options={countries} placeholder='Select country' onChange={this.setCountries} className='selectLbl' />
        <div style={{ height: "10px" }} />

        <Search onSearch={this.handleSearch} />
        <News loading={this.state.loading} articles={this.state.articles} />
      </div>

    );
  }
}
export default App;

