import React, { Component } from 'react';
import './App.css';

import { getPokemon } from './poke-api.js';


import Header from './Header.js';
import PokeList from './PokeList.js';
import Search from './Search';
import Paging from './Paging.js';

export const stateStart = {
  results: [],
  page: null,
  perPage: null,
  totalResults: null
}

export default class App extends Component {

  state = stateStart

  async loadPokemon() {
      const pokemonData = await getPokemon();

      const searchParam = new URLSearchParams(window.location.search);
      if (!searchParam) window.location.search = 'page=1';

      const currentPage = (searchParam) ? Number(searchParam.get('page')) : 1;
      
      this.setState({
        results: pokemonData.body.results,
        page: currentPage,
        perPage: pokemonData.body.perPage,
        totalResults: pokemonData.body.count
      })
  }

  async componentDidMount() {
    await this.loadPokemon();
    

    window.addEventListener('hashchange', async () => {
      await this.loadPokemon();
    })
  }

  render() {
    return <div>
      <Search />
      <Header />
      <PokeList pokemon={this.state.results} />
      <Paging currentPage={this.state.page} totalResults={this.state.totalResults} perPage={this.state.perPage} />
    </div>
  }
}
