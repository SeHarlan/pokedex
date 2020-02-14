import React, { Component } from 'react';
import './App.css';

import { getPokemon } from './poke-api.js';


import Header from './Header.js';
import PokeList from './PokeList.js';
import Search from './Search';

export const stateStart = {
  results: [],
  page: null,
  perPage: null,
  total: null
}

export default class App extends Component {

  state = stateStart

  async loadPokemon() {
      const pokemonData = await getPokemon();
      console.log(pokemonData.body.results)
      this.setState({
        results: pokemonData.body.results,
        page: pokemonData.body.page,
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
    </div>
  }
}
